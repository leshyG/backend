import { Categoria } from "./models/Categoria.js";
import { Pago } from "./models/Pago.js";
import { Pedido } from "./models/Pedido.js";
import { Producto } from "./models/Producto.js";
import { Usuario } from "./models/Usuario.js";

async function ProductoInsert() {
  const products = [
    {
      title: "Secaplatos Aluminio con Porta Cubiertos 57,5x35x27 cm",
      description: "Secaplatos de aluminio con diseño práctico y resistente.",
      price: 125,
      discountPrice: 179,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/207451-500-auto?v=637959483575130000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 7 Condimentero vidrio con rack 2 niveles",
      description: "Conjunto de condimenteros de vidrio con un elegante rack.",
      price: 26.9,
      discountPrice: 44,
      discount: "-40%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/273210-500-auto?v=638279099924970000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Mat Tex. Secavasos Textura 38 x 50 cm",
      description: "Alfombra textil para secar vasos con diseño moderno.",
      price: 10.4,
      discountPrice: 14.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/294838-500-auto?v=638566720544430000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Dispensador Poliresina para Lavaloza 9,1 x 8,2 x 18,2 cm",
      description: "Práctico dispensador de poliresina para lavaloza.",
      price: 25.1,
      discountPrice: 35.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/294266-500-auto?v=638545855094230000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 4 Tazas Acero Inoxidable medidoras",
      description: "Juego de tazas medidoras de acero inoxidable.",
      price: 17.95,
      discountPrice: 35.9,
      discount: "-50%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/198265-500-auto?v=637850445040270000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 3 Mini Escobillas para lavaplatos",
      description: "Prácticas escobillas para limpiar en espacios reducidos.",
      price: 11.1,
      discountPrice: 15.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/293027-500-auto?v=638527651148800000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 4 Cucharas Acero Inoxidable de Medidas",
      description: "Cucharas medidoras de acero inoxidable para 1.",
      price: 7.45,
      discountPrice: 14.9,
      discount: "-50%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/198262-500-auto?v=637850445007730000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Tabla L Acacia 39 x 28.5 cm",
      description: "Tabla de madera de acacia, ideal para picar alimentos.",
      price: 34.9,
      discountPrice: 49.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/293788-500-auto?v=638544274689970000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title:
        "Secaplatos Aluminio con Bandeja y Escurre Cubiertos 44x36x11,5 cm",
      description:
        "Secaplatos de aluminio con bandeja y escurridor de cubiertos.",
      price: 79.8,
      discountPrice: 114.0,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/205683-500-auto?v=637945529385670000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title:
        "Secaplatos 2 pisos Aluminio Pequeño con Bandeja y Escurre Cubiertos 51x24,5x34 cm",
      description: "Compacto secaplatos de aluminio de dos pisos.",
      price: 104.3,
      discountPrice: 149.0,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/207445-500-auto?v=637959483523500000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 3 Tablas Plásticas",
      description: "Set de tablas plásticas de alta calidad para 1.",
      price: 19.5,
      discountPrice: 27.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/293783-500-auto?v=638544274594900000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 7 Condimentero vidrio con rack 2 niveles",
      description: "Conjunto de condimenteros de vidrio con un elegante rack.",
      price: 26.9,
      discountPrice: 44,
      discount: "-40%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/273210-500-auto?v=638279099924970000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Mat Tex. Secavasos Textura 38 x 50 cm",
      description: "Alfombra textil para secar vasos con diseño moderno.",
      price: 10.4,
      discountPrice: 14.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/294838-500-auto?v=638566720544430000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Dispensador Poliresina para Lavaloza 9,1 x 8,2 x 18,2 cm",
      description: "Práctico dispensador de poliresina para lavaloza.",
      price: 25.1,
      discountPrice: 35.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/294266-500-auto?v=638545855094230000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 4 Tazas Acero Inoxidable medidoras",
      description: "Juego de tazas medidoras de acero inoxidable.",
      price: 17.95,
      discountPrice: 35.9,
      discount: "-50%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/198265-500-auto?v=637850445040270000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 3 Mini Escobillas para lavaplatos",
      description: "Prácticas escobillas para limpiar en espacios reducidos.",
      price: 11.1,
      discountPrice: 15.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/293027-500-auto?v=638527651148800000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Set 4 Cucharas Acero Inoxidable de Medidas",
      description: "Cucharas medidoras de acero inoxidable para 1.",
      price: 7.45,
      discountPrice: 14.9,
      discount: "-50%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/198262-500-auto?v=637850445007730000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Tabla L Acacia 39 x 28.5 cm",
      description: "Tabla de madera de acacia, ideal para picar alimentos.",
      price: 34.9,
      discountPrice: 49.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/293788-500-auto?v=638544274689970000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title:
        "Secaplatos Aluminio con Bandeja y Escurre Cubiertos 44x36x11,5 cm",
      description:
        "Secaplatos de aluminio con bandeja y escurridor de cubiertos.",
      price: 79.8,
      discountPrice: 114.0,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/205683-500-auto?v=637945529385670000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title:
        "Secaplatos 2 pisos Aluminio Pequeño con Bandeja y Escurre Cubiertos 51x24,5x34 cm",
      description: "Compacto secaplatos de aluminio de dos pisos.",
      price: 104.3,
      discountPrice: 149.0,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/207445-500-auto?v=637959483523500000&width=500&height=auto&aspect=true",
      categoriaId: 1,
    },
    {
      title: "Canasto Barr",
      description: "Canasto versátil para 2.",
      price: 39.9,
      discountPrice: 31.9,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/294964-500-auto?v=638570190084200000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Caja Organiz",
      description: "Caja organizadora ideal para espacios reducidos.",
      price: 50.0,
      discountPrice: 40.0,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/294882-500-auto?v=638568315084130000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Caja Plástica",
      description: "Caja plástica apilable y resistente.",
      price: 63.9,
      discountPrice: 44.7,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/284679-500-auto?v=638400041196830000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Caja Bambi",
      description: "Caja de bambú ecológica y funcional.",
      price: 18.9,
      discountPrice: 15.1,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286137-500-auto?v=638434602746930000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Caja Acrílica",
      description: "Caja acrílica organizadora con tapa.",
      price: 20.9,
      discountPrice: 14.9,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/284662-500-auto?v=638400041035330000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Botiquín Plástico",
      description: "Botiquín plástico con bandejas divisorias.",
      price: 39.9,
      discountPrice: 31.9,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/284806-500-auto?v=638400042580000000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Set 3 Cajas",
      description: "Set de tres cajas organizadoras para cajón.",
      price: 31.9,
      discountPrice: 25.5,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/289649-500-auto?v=638463935302900000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Mueble Clóset",
      description: "Mueble metálico con bandejas y ruedas.",
      price: 219.0,
      discountPrice: 109.5,
      discount: "-50%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/284674-500-auto?v=638400041150270000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Canasto Polipropileno",
      description: "Canasto de polipropileno tejido para 2.",
      price: 159.0,
      discountPrice: 79.5,
      discount: "-50%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286357-500-auto?v=638434603812500000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Removedor de Pelusa",
      description: "Removedor de pelusa reutilizable.",
      price: 15.9,
      discountPrice: 11.9,
      discount: "-25%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286161-500-auto?v=638434602900170000&width=500&height=auto&aspect=true",
      categoriaId: 2,
    },
    {
      title: "Cajonera MDF - Bambú 3 Cajones 16,7x21,2x27,6 cm",
      description: "Cajonera compacta con diseño elegante en MDF y bambú.",
      price: 79.9,
      discountPrice: 63.9,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286209-500-auto?v=638434603142270000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Cajonera MDF y Bambú 4 cajones 33x25x12,5",
      description: "Cajonera práctica con cuatro cajones de MDF y bambú.",
      price: 84.9,
      discountPrice: 67.9,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/247911-500-auto?v=638078497347230000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Cajonera MDF y Bambú 2 Cajones 33x25x12,5",
      description: "Cajonera funcional con dos cajones de MDF y bambú.",
      price: 84.9,
      discountPrice: 67.9,
      discount: "-20%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286167-500-auto?v=638434602934500000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Caja Apilable de Metal Forma 34x30x15 cm",
      description: "Caja apilable de metal para organizar documentos.",
      price: 64.9,
      discountPrice: 29.9,
      discount: "-54%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/283748-500-auto?v=638379136178470000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title:
        "Organizador documentos de Plástico Polipropileno clear 16x17,8x17,8 cm",
      description: "Organizador de documentos transparente y funcional.",
      price: 0,
      discountPrice: 20.9,
      discount: "0%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/285209-500-auto?v=638405822073130000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Cajonera Acrílico - Bambú 2 Cajones 32,1x24,2x13,4 cm",
      description: "Cajonera elegante de acrílico con bambú.",
      price: 104.0,
      discountPrice: 72.8,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286199-500-auto?v=638434603095530000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Cajonera Plástica con Ruedas y 3 Compartimientos 44x33,5x59 cm",
      description: "Cajonera plástica móvil con tres compartimientos.",
      price: 0,
      discountPrice: 119.0,
      discount: "0%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/284882-500-auto?v=638400043459000000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Cajonera Acrílico - Bambú 3 Cajones 9,6x17,2x26,9 cm",
      description: "Cajonera de acrílico con tres cajones y detalles de bambú.",
      price: 84.9,
      discountPrice: 59.4,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/286204-500-auto?v=638434603119000000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Caja Organizadora Transparente con Tapa Bambú 3,8 l",
      description: "Caja organizadora con tapa de bambú, ideal para 3.",
      price: 35.9,
      discountPrice: 25.1,
      discount: "-30%",
      image:
        "https://casaideasperu.vtexassets.com/arquivos/ids/289590-500-auto?v=638463935035500000&width=500&height=auto&aspect=true",
      categoriaId: 3,
    },
    {
      title: "Caja Luxor 12L Rey",
      description: "Caja organizadora de 12 litros con diseño compacto.",
      price: 21.9,
      discountPrice: 21.9,
      discount: "0%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-luxor-12l-rey-50658-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Móvil Suprema #40 Con Tapa",
      description: "Caja móvil con tapa, ideal para almacenamiento versátil.",
      price: 33.9,
      discountPrice: 33.9,
      discount: "0%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-movil-suprema-40-con-tapa-50662-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja De Herramientas Reyplast Megabox 20''",
      description: "Caja de herramientas resistente de gran tamaño.",
      price: 49.9,
      discountPrice: 49.9,
      discount: "0%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-de-herramientas-reyplast-megabox-20-60090-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Organizadora Duraplast Broadway Grande Avengers 65 L",
      description: "Caja organizadora con tapa y diseño Avengers.",
      price: 67.1,
      discountPrice: 47.1,
      discount: "-30%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-duraplast-broadway-avengers-grande-65-l-con-tapa-66737-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Infinity Con Ruedas 60 L",
      description: "Caja plástica con ruedas, práctica y funcional.",
      price: 44.1,
      discountPrice: 41.0,
      discount: "-7%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/i/n/infinity-box-60-lt-cruedas-57336-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Toolbox N°4 13 Lt",
      description: "Caja de herramientas compacta de 13 litros.",
      price: 25.0,
      discountPrice: 24.0,
      discount: "-4%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/t/o/toolbox-n4-13-lt-57383-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Kitbox N°1 Baja Diseño Spiderman",
      description: "Caja organizadora baja con diseño Spiderman.",
      price: 13.0,
      discountPrice: 12.0,
      discount: "-8%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-kitbox-n1-baja-spiderman-duraplast-57933-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Movil Suprema #40 Toy Story Rey",
      description: "Caja móvil con tapa y diseño Toy Story.",
      price: 41.9,
      discountPrice: 41.9,
      discount: "0%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-movil-suprema-40-toy-story-rey-50668-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Kitbox N°1 Baja Diseño Princesas",
      description: "Caja organizadora baja con diseño Princesas.",
      price: 13.0,
      discountPrice: 12.0,
      discount: "-8%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-kitbox-n1-baja-princesa-duraplast-57931-default-1.jpg",
      categoriaId: 4,
    },
    {
      title: "Caja Optimus N°3 Alta Sin Bandeja Princesas 24 L",
      description: "Caja alta sin bandeja con diseño Princesas.",
      price: 36.0,
      discountPrice: 33.0,
      discount: "-8%",
      image:
        "https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/c/a/caja-optimus-3-alta-sbandeja-princesa-57937-default-1.jpg",
      categoriaId: 4,
    },
  ];
  try {
    await Producto.bulkCreate(products);
    console.log("Products inserted!");
  } catch (error) {
    console.error("Error inserting products:", error);
  }
}

async function CategoriaInsert() {
  const categoria = [
    { nombre: "Cocina" },
    { nombre: "Baño" },
    { nombre: "Oficina" },
    { nombre: "Garage" },
  ];
  try {
    await Categoria.bulkCreate(categoria);
    console.log("Categorias inserted!");
  } catch (error) {
    console.error("Error inserting categorias:", error);
  }
}

async function PagoInsert() {
  const pago = [
    { nombre: "Tarjeta de débito" },
    { nombre: "Tarjeta de crédito" },
    { nombre: "Yape" },
    { nombre: "Plin" },
    { nombre: "PagoEfectivo" },
  ];
  try {
    await Pago.bulkCreate(pago);
    console.log("Pagos inserted!");
  } catch (error) {
    console.error("Error inserting pagos:", error);
  }
}

async function UsuarioInsert() {
  const pago = [
    {
      email: "user1@gmail.com",
      passwordHash:
        "$2a$10$TY8ZGjgE1BRbmLIEtx/zge8tIkV3rYOWFxOG8M..rhV/.tWTWn2Z2",
    },
    {
      email: "user2@gmail.com",
      passwordHash:
        "$2a$10$XRm2dvAu.VRY.ABTG3DmL.O3.G18Bd01yAUSPUl7pmQ2gX8Og4LXW",
    },
    {
      email: "user3@gmail.com",
      passwordHash:
        "$2a$10$ed7YhjN2YZPJWBmXVyBaHOyzGLCd21eE89YkUJlB2IvJN4dZH.33W",
    },
    {
      email: "user4@gmail.com",
      passwordHash:
        "$2a$10$ay0mQtX9egez8lYMy2oHIOaFxtVMhTJ9tjFXflclBAyId1Iq03KyC",
    },
    {
      email: "user5@gmail.com",
      passwordHash:
        "$2a$10$VPbBrmEypBd5ntUrjR2oTe0KKHaAKTLHz1xavQ4ixGU2yGOvug1my",
    },
  ];
  try {
    await Usuario.bulkCreate(pago);
    console.log("Usuarios inserted!");
  } catch (error) {
    console.error("Error inserting usuarios:", error);
  }
}
async function PedidoInsert(){
const pedido = [
  {
    fecha: "2022-02-08 21:19:52",
    estado: "procesando",
    pago: 40.0,
    usuarioId: 4,
    pagoId: 3,
  },
  {
    fecha: "2022-12-30 10:17:16",
    estado: "procesando",
    pago: 83.0,
    usuarioId: 2,
    pagoId: 2,
  },
  {
    fecha: "2023-06-12 13:32:17",
    estado: "entregado",
    pago: 38.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2023-02-17 00:17:59",
    estado: "enviado",
    pago: 24.0,
    usuarioId: 5,
    pagoId: 1,
  },
  {
    fecha: "2022-05-28 23:44:48",
    estado: "entregado",
    pago: 92.0,
    usuarioId: 3,
    pagoId: 1,
  },
  {
    fecha: "2023-12-14 16:53:01",
    estado: "enviado",
    pago: 48.0,
    usuarioId: 1,
    pagoId: 3,
  },
  {
    fecha: "2022-12-07 12:37:45",
    estado: "entregado",
    pago: 80.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2022-09-13 06:15:08",
    estado: "entregado",
    pago: 74.0,
    usuarioId: 4,
    pagoId: 3,
  },
  {
    fecha: "2023-01-20 13:18:29",
    estado: "entregado",
    pago: 69.0,
    usuarioId: 1,
    pagoId: 1,
  },
  {
    fecha: "2023-04-27 04:02:36",
    estado: "enviado",
    pago: 44.0,
    usuarioId: 1,
    pagoId: 1,
  },
  {
    fecha: "2023-06-30 14:29:40",
    estado: "enviado",
    pago: 61.0,
    usuarioId: 2,
    pagoId: 3,
  },
  {
    fecha: "2023-05-04 01:26:09",
    estado: "entregado",
    pago: 39.0,
    usuarioId: 2,
    pagoId: 1,
  },
  {
    fecha: "2023-04-16 22:06:27",
    estado: "pendiente",
    pago: 99.0,
    usuarioId: 1,
    pagoId: 1,
  },
  {
    fecha: "2022-08-03 13:41:06",
    estado: "enviado",
    pago: 47.0,
    usuarioId: 1,
    pagoId: 1,
  },
  {
    fecha: "2022-09-27 22:18:19",
    estado: "pendiente",
    pago: 52.0,
    usuarioId: 1,
    pagoId: 2,
  },
  {
    fecha: "2022-03-28 23:34:42",
    estado: "entregado",
    pago: 35.0,
    usuarioId: 1,
    pagoId: 1,
  },
  {
    fecha: "2022-08-04 21:26:44",
    estado: "procesando",
    pago: 68.0,
    usuarioId: 2,
    pagoId: 3,
  },
  {
    fecha: "2023-01-12 01:02:33",
    estado: "pendiente",
    pago: 37.0,
    usuarioId: 3,
    pagoId: 2,
  },
  {
    fecha: "2023-12-01 07:27:16",
    estado: "enviado",
    pago: 84.0,
    usuarioId: 1,
    pagoId: 2,
  },
  {
    fecha: "2022-05-06 00:03:12",
    estado: "entregado",
    pago: 75.0,
    usuarioId: 3,
    pagoId: 1,
  },
  {
    fecha: "2022-11-15 10:09:05",
    estado: "entregado",
    pago: 81.0,
    usuarioId: 4,
    pagoId: 2,
  },
  {
    fecha: "2022-06-03 06:03:07",
    estado: "enviado",
    pago: 82.0,
    usuarioId: 2,
    pagoId: 1,
  },
  {
    fecha: "2023-12-16 12:40:57",
    estado: "entregado",
    pago: 79.0,
    usuarioId: 2,
    pagoId: 3,
  },
  {
    fecha: "2022-04-06 15:18:49",
    estado: "enviado",
    pago: 75.0,
    usuarioId: 1,
    pagoId: 2,
  },
  {
    fecha: "2022-02-20 19:35:33",
    estado: "entregado",
    pago: 34.0,
    usuarioId: 3,
    pagoId: 1,
  },
  {
    fecha: "2022-09-08 10:52:03",
    estado: "entregado",
    pago: 92.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2023-08-11 07:10:40",
    estado: "procesando",
    pago: 68.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2023-12-28 15:50:22",
    estado: "pendiente",
    pago: 42.0,
    usuarioId: 2,
    pagoId: 2,
  },
  {
    fecha: "2022-11-12 09:08:06",
    estado: "pendiente",
    pago: 39.0,
    usuarioId: 3,
    pagoId: 1,
  },
  {
    fecha: "2022-07-13 01:43:38",
    estado: "enviado",
    pago: 58.0,
    usuarioId: 3,
    pagoId: 2,
  },
  {
    fecha: "2022-01-07 09:29:59",
    estado: "procesando",
    pago: 32.0,
    usuarioId: 5,
    pagoId: 2,
  },
  {
    fecha: "2022-12-17 05:36:54",
    estado: "enviado",
    pago: 69.0,
    usuarioId: 1,
    pagoId: 2,
  },
  {
    fecha: "2022-01-18 13:57:23",
    estado: "enviado",
    pago: 89.0,
    usuarioId: 3,
    pagoId: 2,
  },
  {
    fecha: "2022-02-08 01:10:16",
    estado: "pendiente",
    pago: 98.0,
    usuarioId: 2,
    pagoId: 1,
  },
  {
    fecha: "2022-02-12 05:04:41",
    estado: "enviado",
    pago: 83.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2023-01-28 10:57:16",
    estado: "entregado",
    pago: 38.0,
    usuarioId: 3,
    pagoId: 3,
  },
  {
    fecha: "2022-07-16 15:45:53",
    estado: "procesando",
    pago: 20.0,
    usuarioId: 2,
    pagoId: 3,
  },
  {
    fecha: "2022-10-19 04:45:50",
    estado: "procesando",
    pago: 40.0,
    usuarioId: 5,
    pagoId: 2,
  },
  {
    fecha: "2022-10-05 11:48:43",
    estado: "entregado",
    pago: 64.0,
    usuarioId: 5,
    pagoId: 1,
  },
  {
    fecha: "2023-11-27 21:06:06",
    estado: "enviado",
    pago: 92.0,
    usuarioId: 2,
    pagoId: 1,
  },
  {
    fecha: "2022-05-05 10:08:57",
    estado: "procesando",
    pago: 94.0,
    usuarioId: 5,
    pagoId: 3,
  },
  {
    fecha: "2023-07-25 18:30:14",
    estado: "procesando",
    pago: 49.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2023-10-10 13:50:45",
    estado: "procesando",
    pago: 74.0,
    usuarioId: 1,
    pagoId: 3,
  },
  {
    fecha: "2023-02-17 21:12:50",
    estado: "entregado",
    pago: 47.0,
    usuarioId: 1,
    pagoId: 2,
  },
  {
    fecha: "2023-06-11 15:07:48",
    estado: "enviado",
    pago: 64.0,
    usuarioId: 1,
    pagoId: 2,
  },
  {
    fecha: "2022-11-08 07:36:29",
    estado: "enviado",
    pago: 63.0,
    usuarioId: 2,
    pagoId: 1,
  },
  {
    fecha: "2022-04-26 10:41:21",
    estado: "entregado",
    pago: 28.0,
    usuarioId: 4,
    pagoId: 1,
  },
  {
    fecha: "2023-12-24 23:46:00",
    estado: "enviado",
    pago: 51.0,
    usuarioId: 2,
    pagoId: 3,
  },
  {
    fecha: "2023-06-20 03:31:03",
    estado: "entregado",
    pago: 44.0,
    usuarioId: 5,
    pagoId: 1,
  }];
  try {
    await Pedido.bulkCreate(pedido);
    console.log("pedidos inserted!");
  } catch (error) {
    console.error("Error inserting pedidos:", error);
  }
};
UsuarioInsert();
CategoriaInsert();
PagoInsert();
ProductoInsert();
PedidoInsert();