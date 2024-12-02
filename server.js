import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { sequelize } from '../backend/db/db.js';
import { Usuario } from './models/Usuario.js';
import { Pago } from './models/Pago.js';
import { Categoria } from './models/Categoria.js';
import { Pedido } from './models/Pedido.js';
import { Producto } from './models/Producto.js';
import { ProductoFerreteria} from './models/ProductoFerreteria.js';
//import { Pedido_Producto } from "./models/Pedido.js";

const app = express();
const PORT = 8000;

async function verificarConexion() {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la BD");
    await sequelize.sync(/*{ force: true }*/);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}


// Middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json("TODO BIEN");
});
// Ruta para guardar la suscripción
app.post("/saveSubscription", (req, res) => {
  const { email, subscriptionCode } = req.body;

  // Cargar el archivo JSON existente o crear uno nuevo
  const filePath = path.join(__dirname, "subscriptions.json");
  let subscriptions = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    subscriptions = JSON.parse(data);
  }

  // Agregar la nueva suscripción
  subscriptions.push({ email, subscriptionCode });

  // Guardar en el archivo JSON
  fs.writeFileSync(filePath, JSON.stringify(subscriptions, null, 2), "utf-8");

  res.status(200).json({ message: "Suscripción guardada exitosamente" });
});

//REGISTRAR USUARIOS
app.post("/register", async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res
      .status(400)
      .json({ error: "Por favor, rellene todos los campos" });
  }

  //EXPRESSION PARA FORMATO DE CORREO
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //VALIDACION MINISMALISTA
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "El correo electrónico no es válido" });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "La constraseña tiene que tener al menos 8 caracteres" });
  }
  try {
    //HASHEAR LA CONTRASEÑA
    const hash = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      email,
      passwordHash: hash,
      username,
    });

    res
      .status(201)
      .json({
        message: "Usuario registrado exitosamente",
        email: nuevoUsuario.email,
      });
  } catch (err) {
    console.error("Error al registrar usuario:", err);

    if (err.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({
          error: "El correo electrónico o el usuario ya está registrado",
        });
    }
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});



//PÁGINA DE LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar si ambos campos están presentes
    if (!email || !password) {
      return res.status(400).json({ error: "Rellene todos los campos" });
    }

    // Buscar el usuario por email
    const usuario = await Usuario.findOne({ where: { email } });

    // Validar si el usuario existe
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    //Validar si el usuario está activado
    if (usuario.estado == false) {
      return res.status(404).json({ error: "¡Usuario desactivado!" });
    }

    // Comparar la contraseña ingresada con el hash almacenado
    const isMatch = await bcrypt.compare(password, usuario.passwordHash);
    if (isMatch) {
      return res.json({
        message: "Inicio de sesión exitoso",
        id: usuario.id,
        email: usuario.email,
        username: usuario.username,
      });
    } else {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.error("Error en /login:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

//CAMBIAR CONTRASEÑA DEL USUARIO
app.put("/changepass", async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;
  if (!email || !currentPassword || !newPassword) {
    return res.status(400).json({ error: "Rellene todos los campos" });
  }

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // VERIFICACION DE CONTRASEÑA ACTUAL
    const isMatch = await bcrypt.compare(currentPassword, usuario.passwordHash);
    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "La contraseña actual es incorrecta" });
    }

    // VALIDACION MINIMALISTA
    if (newPassword.length < 8) {
      return res
        .status(400)
        .json({
          error: "La nueva contraseña debe tener al menos 8 caracteres",
        });
    }

    const hash = await bcrypt.hash(newPassword, 10);

    usuario.passwordHash = hash;
    await usuario.save();

    res.status(200).json({ message: "¡Contraseña actualizada!" });
  } catch (err) {
    res.status(400).json({ error: "Ocurrió un error" });
  }
});

// PÁGINA DE CONTACTO
app.post("/contacto", (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }
  console.log(`Nuevo mensaje de contacto: ${nombre}, ${correo}, ${mensaje}`);

  res.json({ message: "¡Nos contactaremos pronto con usted!" });
});

app.post("/pedido", async (req, res) => {
  const { id, fecha, estado, total, formapago,productos, productosFerreteria } = req.body;

  if (!id || !fecha || !estado || !total || !formapago) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const pago = await Pago.findOne({ where: { nombre: formapago } });

    const nuevoPedido = await Pedido.create({
      fecha,
      estado,
      pago: total,
      usuarioId: id,
      pagoId: pago.id,
    });

    const agregarProductos = async (productos, modelo, addProductoFunc) => {
      if (productos && productos.length > 0) {
        for (const productoData of productos) {
          const { id, cantidad, price } = productoData;
          const producto = await modelo.findByPk(id);
    
          if (producto) {
            await nuevoPedido[addProductoFunc](producto, {
              through: {
                cantidad: cantidad,
                precioU: price,
              },
            });
          }
        }
      }
    };
    
    // Llamada para productos normales
    await agregarProductos(productos, Producto, 'addProducto');
    
    // Llamada para productos de ferretería
    await agregarProductos(productosFerreteria, ProductoFerreteria, 'addProductoFerreteria');
    

    res.json({ message: "¡Pedido Hecho!", pedido: nuevoPedido });
  } catch (error) {
    console.error("Error al crear el pedido:", error);
    res.status(500).json({ error: "Error al crear el pedido." });
  }
});

<<<<<<< HEAD
=======

// GETS PARA TESTEO

app.get("/producto/:id", async (req, res) => {
  const producto = await Producto.findByPk(req.params.id, {
    include: {
      model: Categoria,
    },
  });
  res.status(200).json(producto);
});

>>>>>>> e916b468e5868b1048bedf0004a2b8f2e531425f
app.get("/perfil", async (req, res) => {
  const { id } = req.query 
  try {
    const pedido = await Pedido.findAll({
      where: { usuarioId: id },
      attributes: ["id", "fecha", "estado", "pago"],
      include: [
        {
          model: Producto, 
          through: {
            attributes: ["cantidad", "precioU"], 
          },
        },
        {
          model: ProductoFerreteria, 
          through: {
            attributes: ["cantidad", "precioU"], 
          },
        },
      ],
    });
    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los pedidos." });
  }
});

app.get("/producto/:id", async (req, res) => {
  const producto = await Producto.findByPk(req.params.id, {
    include: {
      model: Categoria,
    },
  });
  res.status(200).json(producto);
});

//FETCH DE PRODUCTOS EN LA PÁGINA

app.get("/products", async (req, res) => {
  try {
    const productos = await Producto.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "price",
        "discountPrice",
        "discount",
        "image",
      ],
      include: [
        {
          model: Categoria,
          as: "Categorium",
          attributes: ["nombre"],
        },
      ],
    });
    res.json({ products: productos });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error al obtener productos");
  }
});



//FETCH DE FERRETERIA EN LA PÁGINA
app.get("/Ferreteria", async (req, res) => {
  try {
    const productos = await ProductoFerreteria.findAll({
      attributes: ['id', 'title', 'description', 'price', 'discountPrice', 'discount', 'image','priceOption1','priceOption2','priceOption3','priceOption4','priceOption5','priceOption6','priceOption7'],
      include: [
        {
          model: Categoria,
          as: "Categorium",
          attributes: ['nombre'],
        },
      ],
    });
    console.log(productos)
    res.json({ productsferre: productos });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error al obtener productos");
  }
});

// GETS PARA TESTEO

app.get("/producto/:id", async (req, res) => {
  const producto = await Producto.findByPk(req.params.id, {
    include: {
      model: Categoria,
    },
  });
  res.status(200).json(producto);
});

//GET DE TODOS LOS USUARIOS (admin)
app.get("/admin/users", async (req, res) => {
  const usuariosRegistrados = await Usuario.findAll({
    where: { estado: true },
  });
  res.status(200).json(usuariosRegistrados);
});

//CRUD DE ADMINISTRADOR PARA PRODUCTOS
app.get("/admin/products", async (req, res) => {
  const productos = await Producto.findAll();
  res.status(200).json(productos);
});

app.post("/admin/products", async (req, res) => {
  try {
    const productoData = req.body; 
    const nuevoProducto = await Producto.create(productoData);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

app.put("/admin/products/:id", async (req, res) => {
  const { id } = req.params; // ID del producto a actualizar
  const { title, description, price, discountPrice, discount, image } = req.body;

  try {
    // Buscar el producto por ID
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Actualizar el producto con los datos enviados
    await producto.update({
      title,
      description,
      price,
      discountPrice,
      discount,
      image,
    });

    res.status(200).json({ message: "Producto actualizado correctamente", producto });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
});

app.delete("/admin/products/:id", async (req, res) => {
  const { id } = req.params; // ID del producto a eliminar

  try {
    // Buscar el producto por ID
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Eliminar el producto
    await producto.destroy();

    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
});

// DELETE DE USUARIOS (admin)
app.delete("/deleteuser", async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return res.status(400).json({ error: "Confirme el usuario" });
  }
  usuario.estado = false;
  await usuario.save();
  res.json({ message: "Eliminado exitoso", usuario });
});

//LOGIN ADMIN
app.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validar si ambos campos están presentes
    if (!username || !password) {
      return res.status(400).json({ error: "Rellene todos los campos" });
    }

    // Buscar el usuario por usuario
    const usuario = await Usuario.findOne({ where: { username } });

    // Validar si el usuario existe
    if (username != "ADMIN") {
      return res.status(404).json({ error: "USTED NO ES EL ADMIN" });
    }
    const isMatch = await bcrypt.compare(password, usuario.passwordHash);
    if (isMatch) {
      return res.json({
        message: "ADMIN INICIADO",
        id: usuario.id,
        email: usuario.email,
        username: usuario.username,
      });
    } else {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.error("Error en /login:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  verificarConexion();
});
