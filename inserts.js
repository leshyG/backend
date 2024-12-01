import { Categoria } from "./models/Categoria.js";
import { Pago } from "./models/Pago.js";
import { Pedido } from "./models/Pedido.js";
import { Producto } from "./models/Producto.js";
import { Usuario } from "./models/Usuario.js";
import { ProductoFerreteria} from './models/ProductoFerreteria.js';

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


async function ProductoInsertferre() {
  const productsferre = [
    {
      title: "Tornillos de Cabeza Plana",
      description: "Se ajustan en agujeros avellanados para un acabado a ras",
      image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/4122917_01/w=1500,h=1500,fit=pad",
      price: 22.75,
      discountPrice: 18.00,
      discount: "-21%",
      priceOption1: 24.25,
      priceOption2: 25.50,
      priceOption3: 26.75,
      priceOption4: 28.00,
      priceOption5: 29.25,
      priceOption6: 30.50,
      priceOption7: 31.75,
      categoriaId: 1
    },
  
    {
      title: "Tornillos de Cabeza Redondeada",
      description: "Se sitúan justo por encima de la superficie para un acabado de bajo perfil y sostienen más firmemente que los tornillos de cabeza plana",
      image: "https://img.freepik.com/vector-premium/ilustracion-tornillo-metal-aislado-sobre-fondo-blanco-cabeza-redonda-tipos-tornillos-ranurados-cruzados-hexagonales-vista-superior_212889-4520.jpg",
      price: 12.99,
      discountPrice: 8.99,
      discount: "-30%",
      priceOption1: 14.49,
      priceOption2: 15.99,
      priceOption3: 17.49,
      priceOption4: 18.99,
      priceOption5: 20.49,
      priceOption6: 21.99,
      priceOption7: 23.49,
      categoriaId: 1
    },
    {
      title: "Tornillos de Cabeza Hexagonal",
      description: "Se utilizan con tuercas para crear una unión más fuerte que los tornillos de cabeza plana y redondeada",
      image: "https://ferrecito.com/cdn/shop/files/TORM-1-4X1-1-2_1024x.jpg?v=1710432573",
      price: 18.50,
      discountPrice: 13.99,
      discount: "-24%",
      priceOption1: 20.50,
      priceOption2: 22.00,
      priceOption3: 23.50,
      priceOption4: 25.00,
      priceOption5: 26.50,
      priceOption6: 28.00,
      priceOption7: 29.50,
      categoriaId: 1
    }
    ,
    {
      title: "Tornillos de Cabeza Plana",
      description: "Se ajustan en agujeros avellanados para un acabado a ras",
      image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/4122917_01/w=1500,h=1500,fit=pad",
      price: 22.75,
      discountPrice: 18.00,
      discount: "-21%",
      priceOption1: 24.00,
      priceOption2: 25.50,
      priceOption3: 27.00,
      priceOption4: 28.50,
      priceOption5: 30.00,
      priceOption6: 31.50,
      priceOption7: 33.00,
      categoriaId: 1
    }
    ,
    {
      title: "Tornillos para Atornillar",
      description: "Fijan una variedad de materiales juntos sin necesidad de roscar el agujero primero",
      image: "https://via.placeholder.com/80",
      price: 9.80,
      discountPrice: 6.50,
      discount: "-34%",
      priceOption1: 11.00,
      priceOption2: 12.50,
      priceOption3: 14.00,
      priceOption4: 15.50,
      priceOption5: 17.00,
      priceOption6: 18.50,
      priceOption7: 20.00,
      categoriaId: 1
    },
    {
      title: "Tornillos de Hombro",
      description: "Hacen girar partes alrededor del cilindro bajo la cabeza para guiarlas y alinearlas durante la instalación",
      image: "https://via.placeholder.com/80",
      price: 15.00,
      discountPrice: 10.50,
      discount: "-30%",
      priceOption1: 16.50,
      priceOption2: 18.00,
      priceOption3: 19.50,
      priceOption4: 21.00,
      priceOption5: 22.50,
      priceOption6: 24.00,
      priceOption7: 25.50,
      categoriaId: 1
    },
    {
      title: "Tornillos de Ajuste",
      description: "Ejercen presión en la punta para mantener las partes en su lugar, a diferencia de los tornillos que mantienen el material unido con hilos",
      image: "https://via.placeholder.com/80",
      price: 20.00,
      discountPrice: 14.50,
      discount: "-27%",
      priceOption1: 21.50,
      priceOption2: 23.00,
      priceOption3: 24.50,
      priceOption4: 26.00,
      priceOption5: 27.50,
      priceOption6: 29.00,
      priceOption7: 30.50,
      categoriaId: 1
    },
    {
      title: "Tornillos para Madera",
      description: "Fijan material a la madera o piezas de madera entre sí",
      image: "https://via.placeholder.com/80",
      price: 7.50,
      discountPrice: 5.25,
      discount: "-30%",
      priceOption1: 8.50,
      priceOption2: 9.50,
      priceOption3: 10.50,
      priceOption4: 11.50,
      priceOption5: 12.50,
      priceOption6: 13.50,
      priceOption7: 14.50,
      categoriaId: 1
    },
    {
      title: "Tornillos de Manija",
      description: "Se aprietan y aflojan a mano sin necesidad de herramientas",
      image: "https://via.placeholder.com/80",
      price: 11.20,
      discountPrice: 8.50,
      discount: "-24%",
      priceOption1: 12.50,
      priceOption2: 13.50,
      priceOption3: 14.50,
      priceOption4: 15.50,
      priceOption5: 16.50,
      priceOption6: 17.50,
      priceOption7: 18.50,
      categoriaId: 1
    },
    {
      title: "Tornillos de Carro",
      description: "Una cabeza lisa proporciona un acabado terminado mientras que un cuello cuadrado mantiene el tornillo en su lugar al usar una tuerca",
      image: "https://via.placeholder.com/80",
      price: 14.50,
      discountPrice: 10.00,
      discount: "-31%",
      priceOption1: 16.00,
      priceOption2: 17.50,
      priceOption3: 19.00,
      priceOption4: 20.50,
      priceOption5: 22.00,
      priceOption6: 23.50,
      priceOption7: 25.00,
      categoriaId: 1
    },
    {
      title: "Tornillos de 12 Puntos",
      description: "12 puntos de contacto manejan más torsión que una cabeza hexagonal mientras que un flanco elimina la necesidad de una arandela",
      image: "https://via.placeholder.com/80",
      price: 18.80,
      discountPrice: 13.50,
      discount: "-28%",
      priceOption1: 20.00,
      priceOption2: 21.50,
      priceOption3: 23.00,
      priceOption4: 24.50,
      priceOption5: 26.00,
      priceOption6: 27.50,
      priceOption7: 29.00,
      categoriaId: 1
    },
    {
      title: "Tornillos para Paneles Captivos",
      description: "Aseguran paneles y recintos mientras aún se tiene acceso a ellos",
      image: "https://via.placeholder.com/80",
      price: 13.99,
      discountPrice: 9.99,
      discount: "-29%",
      priceOption1: 15.00,
      priceOption2: 16.50,
      priceOption3: 18.00,
      priceOption4: 19.50,
      priceOption5: 21.00,
      priceOption6: 22.50,
      priceOption7: 24.00,
      categoriaId: 1
    },
    {
      title: "Tornillos para Drywall",
      description: "Fijan paneles de drywall a materiales como madera, metal y drywall",
      image: "https://via.placeholder.com/80",
      price: 7.99,
      discountPrice: 5.99,
      discount: "-25%",
      priceOption1: 9.00,
      priceOption2: 10.00,
      priceOption3: 11.00,
      priceOption4: 12.00,
      priceOption5: 13.00,
      priceOption6: 14.00,
      priceOption7: 15.00,
      categoriaId: 1
    }
    ,{
      title: "Asortimientos de Sujetadores",
      description: "Mantente preparado teniendo sujetadores en tamaños y materiales comunes a mano",
      image: "https://via.placeholder.com/80",
      price: 4.99,
      discountPrice: 3.00,
      discount: "-40%",
      priceOption1: 6.99,
      priceOption2: 8.49,
      priceOption3: 10.99,
      priceOption4: 13.99,
      priceOption5: 16.99,
      priceOption6: 19.49,
      priceOption7: 22.99,
      categoriaId: 1
    },
      
    {
      title: "Tornillos de Cabeza Cuadrada",
      description: "Gira los lados planos grandes con una llave en agujeros cuadrados que impiden la rotación adicional",
      image: "https://via.placeholder.com/80",
      price: 10.99,
      discountPrice: 7.99,
      discount: "-27%",
      priceOption1: 12.99,
      priceOption2: 14.49,
      priceOption3: 16.49,
      priceOption4: 18.99,
      priceOption5: 21.49,
      priceOption6: 23.99,
      priceOption7: 25.99,
      categoriaId: 1
    },
    {
      title: "Pernos de Elevador",
      description: "Crea una unión al ras para permitir movimiento en espacios reducidos como elevadores de granos y sistemas de correas",
      image: "https://via.placeholder.com/80",
      price: 25.00,
      discountPrice: 18.00,
      discount: "-28%",
      priceOption1: 27.99,
      priceOption2: 30.49,
      priceOption3: 33.99,
      priceOption4: 36.49,
      priceOption5: 39.99,
      priceOption6: 42.49,
      priceOption7: 44.99,
      categoriaId: 1
    },
    {
      title: "Pernos de Suspensión",
      description: "Sostén tuberías y otros accesorios con alambres o abrazaderas de cable",
      image: "https://via.placeholder.com/80",
      price: 9.50,
      discountPrice: 6.50,
      discount: "-31%",
      priceOption1: 11.99,
      priceOption2: 13.49,
      priceOption3: 15.49,
      priceOption4: 17.49,
      priceOption5: 19.99,
      priceOption6: 21.99,
      priceOption7: 23.99,
      categoriaId: 1
    },
    {
      title: "Pernos en T",
      description: "Gira a mano para un fácil ajuste, úsalo como asa o como punto de fijación para correas y abrazaderas",
      image: "https://via.placeholder.com/80",
      price: 15.50,
      discountPrice: 11.50,
      discount: "-26%",
      priceOption1: 17.99,
      priceOption2: 20.49,
      priceOption3: 22.99,
      priceOption4: 25.49,
      priceOption5: 27.99,
      priceOption6: 30.49,
      priceOption7: 32.99,
      categoriaId: 1
    },
    {
      title: "Pernos de Arado",
      description: "La cabeza queda al ras con los orificios avellanados mientras el perno permanece en su lugar al apretar una tuerca",
      image: "https://via.placeholder.com/80",
      price: 8.20,
      discountPrice: 6.20,
      discount: "-24%",
      priceOption1: 9.99,
      priceOption2: 11.49,
      priceOption3: 12.99,
      priceOption4: 14.49,
      priceOption5: 15.99,
      priceOption6: 17.49,
      priceOption7: 18.99,
      categoriaId: 1
    },
    
    {
      title: "Pernos de Extremo",
      description: "Diseñado para aplicaciones en las que una rosca o tuerca se usa en la misma dirección",
      image: "https://via.placeholder.com/80",
      price: 22.00,
      discountPrice: 16.00,
      discount: "-27%",
      priceOption1: 23.99,
      priceOption2: 25.99,
      priceOption3: 27.99,
      priceOption4: 29.99,
      priceOption5: 31.99,
      priceOption6: 34.49,
      priceOption7: 36.99,
      categoriaId: 1
    },
    {
      title: "Pernos de Sujeción",
      description: "Sujeta el material debajo de la cabeza doblada mientras el otro extremo se aprieta con una tuerca",
      image: "https://via.placeholder.com/80",
      price: 20.50,
      discountPrice: 14.50,
      discount: "-29%",
      priceOption1: 22.99,
      priceOption2: 24.99,
      priceOption3: 27.49,
      priceOption4: 29.99,
      priceOption5: 32.49,
      priceOption6: 34.99,
      priceOption7: 36.99,
      categoriaId: 1
    },
    {
      title: "Tornillos de Acero Inoxidable",
      description: "Resistentes a la corrosión, ideales para aplicaciones al aire libre o en ambientes húmedos.",
      image: "https://via.placeholder.com/80",
      price: 12.00,
      discountPrice: 9.00,
      discount: "-25%",
      priceOption1: 13.99,
      priceOption2: 15.49,
      priceOption3: 17.49,
      priceOption4: 19.49,
      priceOption5: 21.49,
      priceOption6: 23.49,
      priceOption7: 25.49,
      categoriaId: 1
    },
    {
      title: "Tornillos de Cabeza Blanda",
      description: "Perfectos para trabajos de bajo impacto y donde se requiere un agarre seguro.",
      image: "https://via.placeholder.com/80",
      price: 10.50,
      discountPrice: 7.50,
      discount: "-28%",
      priceOption1: 11.99,
      priceOption2: 13.49,
      priceOption3: 14.99,
      priceOption4: 16.49,
      priceOption5: 18.49,
      priceOption6: 20.49,
      priceOption7: 22.49,
      categoriaId: 1
    },
    {
      title: "Tornillos Antideslizantes",
      description: "Tornillos diseñados para evitar el deslizamiento en superficies difíciles.",
      image: "https://via.placeholder.com/80",
      price: 18.00,
      discountPrice: 14.00,
      discount: "-22%",
      priceOption1: 19.99,
      priceOption2: 21.49,
      priceOption3: 23.49,
      priceOption4: 25.49,
      priceOption5: 27.49,
      priceOption6: 29.49,
      priceOption7: 31.49,
      categoriaId: 1
    },
    
    {
      title: "Pernos de Extremo",
      description: "Diseñado para aplicaciones en las que una rosca o tuerca se usa en la misma dirección",
      image: "https://via.placeholder.com/80",
      price: 22.00,
      discountPrice: 16.00,
      discount: "-27%",
      priceOption1: 23.99,
      priceOption2: 25.99,
      priceOption3: 27.99,
      priceOption4: 29.99,
      priceOption5: 31.99,
      priceOption6: 34.49,
      priceOption7: 36.99,
      categoriaId: 1
    },
    {
      title: "Pernos de Sujeción",
      description: "Sujeta el material debajo de la cabeza doblada mientras el otro extremo se aprieta con una tuerca",
      image: "https://via.placeholder.com/80",
      price: 20.50,
      discountPrice: 14.50,
      discount: "-29%",
      priceOption1: 22.99,
      priceOption2: 24.99,
      priceOption3: 27.49,
      priceOption4: 29.99,
      priceOption5: 32.49,
      priceOption6: 34.99,
      priceOption7: 36.99,
      categoriaId: 1
    },
    {
      title: "Tornillos de Acero Inoxidable",
      description: "Resistentes a la corrosión, ideales para aplicaciones al aire libre o en ambientes húmedos.",
      image: "https://via.placeholder.com/80",
      price: 12.00,
      discountPrice: 9.00,
      discount: "-25%",
      priceOption1: 13.99,
      priceOption2: 15.49,
      priceOption3: 17.49,
      priceOption4: 19.49,
      priceOption5: 21.49,
      priceOption6: 23.49,
      priceOption7: 25.49,
      categoriaId: 1
    },
    {
      title: "Tornillos de Cabeza Blanda",
      description: "Perfectos para trabajos de bajo impacto y donde se requiere un agarre seguro.",
      image: "https://via.placeholder.com/80",
      price: 10.50,
      discountPrice: 7.50,
      discount: "-28%",
      priceOption1: 11.99,
      priceOption2: 13.49,
      priceOption3: 14.99,
      priceOption4: 16.49,
      priceOption5: 18.49,
      priceOption6: 20.49,
      priceOption7: 22.49,
      categoriaId: 1
    },
    {
      title: "Tornillos Antideslizantes",
      description: "Tornillos diseñados para evitar el deslizamiento en superficies difíciles.",
      image: "https://via.placeholder.com/80",
      price: 18.00,
      discountPrice: 14.00,
      discount: "-22%",
      priceOption1: 19.99,
      priceOption2: 21.49,
      priceOption3: 23.49,
      priceOption4: 25.49,
      priceOption5: 27.49,
      priceOption6: 29.49,
      priceOption7: 31.49,
      categoriaId: 1
    },
    
    {
      title: "Tornillos de Cabeza Ajustable",
      description: "Permiten el ajuste de la profundidad según la necesidad de la instalación.",
      image: "https://via.placeholder.com/80",
      price: 12.80,
      discountPrice: 9.90,
      discount: "-23%",
      priceOption1: 15.50,
      priceOption2: 16.50,
      priceOption3: 17.50,
      priceOption4: 18.50,
      priceOption5: 19.50,
      priceOption6: 20.00,
      priceOption7: 21.00,
      categoriaId: 1
    },
    {
      title: "Tornillos de Vástago Largo",
      description: "Diseñados para aplicaciones que requieren una longitud adicional para asegurar una mejor fijación.",
      image: "https://via.placeholder.com/80",
      price: 14.00,
      discountPrice: 10.50,
      discount: "-25%",
      priceOption1: 16.50,
      priceOption2: 17.50,
      priceOption3: 18.50,
      priceOption4: 19.50,
      priceOption5: 20.50,
      priceOption6: 21.00,
      priceOption7: 22.00,
      categoriaId: 1
    },
    {
      title: "Adhesivos",
      description: "Une superficies",
      image: "https://via.placeholder.com/80",
      price: 50.00,
      discountPrice: 35.00,
      discount: "-30%",
      priceOption1: 31.50,
      priceOption2: 35.00,
      priceOption3: 37.50,
      priceOption4: 40.00,
      priceOption5: 42.00,
      priceOption6: 45.00,
      priceOption7: 46.50,
      categoriaId: 2
    },
    {
      title: "Boquillas para pistolas dispensadoras de adhesivo",
      description: "Usar con cartuchos en pistolas dispensadoras para controlar el flujo de adhesivo",
      image: "https://via.placeholder.com/80",
      price: 20.00,
      discountPrice: 15.00,
      discount: "-25%",
      priceOption1: 25.50,
      priceOption2: 26.00,
      priceOption3: 28.00,
      priceOption4: 30.00,
      priceOption5: 32.00,
      priceOption6: 33.00,
      priceOption7: 34.00,
      categoriaId: 2
    },
    {
      title: "Pistolas dispensadoras de adhesivo",
      description: "Aplica cordones de adhesivo desde un cartucho a superficies",
      image: "https://via.placeholder.com/80",
      price: 75.00,
      discountPrice: 60.00,
      discount: "-20%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 40.00,
      priceOption4: 42.00,
      priceOption5: 45.00,
      priceOption6: 47.50,
      priceOption7: 50.00,
      categoriaId: 2
    },
    {
      title: "Émbolos para cartuchos de pistolas dispensadoras de adhesivo",
      description: "Usar con jeringas o cartuchos de pistolas dispensadoras para empujar el adhesivo hacia afuera",
      image: "https://via.placeholder.com/80",
      price: 15.00,
      discountPrice: 10.00,
      discount: "-33%",
      priceOption1: 18.50,
      priceOption2: 19.50,
      priceOption3: 21.00,
      priceOption4: 22.50,
      priceOption5: 23.50,
      priceOption6: 25.00,
      priceOption7: 26.00,
      categoriaId: 2
    },
    
    {
      title: "Portacartuchos para pistolas dispensadoras de adhesivo",
      description: "Mantiene los cartuchos de adhesivo en su lugar de forma segura",
      image: "https://via.placeholder.com/80",
      price: 25.00,
      discountPrice: 18.00,
      discount: "-28%",
      priceOption1: 31.50,
      priceOption2: 32.50,
      priceOption3: 34.50,
      priceOption4: 36.50,
      priceOption5: 38.00,
      priceOption6: 39.50,
      priceOption7: 41.00,
      categoriaId: 2
    },
    {
      title: "Cartuchos para pistolas dispensadoras de adhesivo",
      description: "Llenar y luego montar en pistolas dispensadoras para aplicar adhesivos a superficies",
      image: "https://via.placeholder.com/80",
      price: 18.00,
      discountPrice: 12.50,
      discount: "-31%",
      priceOption1: 31.50,
      priceOption2: 32.50,
      priceOption3: 34.50,
      priceOption4: 36.50,
      priceOption5: 38.00,
      priceOption6: 39.50,
      priceOption7: 41.00,
      categoriaId: 2
    },
    {
      title: "Convertidores para pistolas de pegamento",
      description: "Agregar a pistolas de pegamento para usar barras de pegamento de 8\" de largo",
      image: "https://via.placeholder.com/80",
      price: 10.00,
      discountPrice: 7.50,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 32.50,
      priceOption3: 34.50,
      priceOption4: 36.50,
      priceOption5: 38.00,
      priceOption6: 39.50,
      priceOption7: 41.00,
      categoriaId: 2
    },
    {
      title: "Pistolas de pegamento",
      description: "Derrite y dispensa pegamento termofusible",
      image: "https://via.placeholder.com/80",
      price: 60.00,
      discountPrice: 45.00,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 40.00,
      priceOption4: 42.00,
      priceOption5: 45.00,
      priceOption6: 47.50,
      priceOption7: 50.00,
      categoriaId: 2
    },
    {
      title: "Boquillas para pistolas de pegamento",
      description: "Acopla a pistolas de pegamento para controlar el flujo de pegamento",
      image: "https://via.placeholder.com/80",
      price: 12.00,
      discountPrice: 9.00,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 32.50,
      priceOption3: 34.50,
      priceOption4: 36.50,
      priceOption5: 38.00,
      priceOption6: 39.50,
      priceOption7: 41.00,
      categoriaId: 2
    },
    {
      title: "Dispensadores de tubos",
      description: "Exprime todo el contenido de los tubos",
      image: "https://via.placeholder.com/80",
      price: 22.00,
      discountPrice: 17.50,
      discount: "-20%",
      priceOption1: 31.50,
      priceOption2: 32.50,
      priceOption3: 34.50,
      priceOption4: 36.50,
      priceOption5: 38.00,
      priceOption6: 39.50,
      priceOption7: 41.00,
      categoriaId: 2
    },
    
    {
      title: "Tapas selladoras para cartuchos",
      description: "Colocar sobre las puntas de cartuchos de adhesivo y sellador para evitar que se endurezcan",
      image: "https://via.placeholder.com/80",
      price: 8.00,
      discountPrice: 6.00,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Dispensadores de bloqueadores de roscas y compuestos de retención",
      description: "Atornillar en botellas de bloqueador de roscas o compuesto de retención para controlar el flujo y reducir desperdicio",
      image: "https://via.placeholder.com/80",
      price: 25.00,
      discountPrice: 19.00,
      discount: "-24%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Dispensadores de pegamento en rollo",
      description: "Aprieta el gatillo para retirar el revestimiento y aplicar pegamento en rollo; también conocido como cinta adhesiva de transferencia",
      image: "https://via.placeholder.com/80",
      price: 30.00,
      discountPrice: 22.50,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Brochas para adhesivo",
      description: "Esparce adhesivos en partes y otras superficies",
      image: "https://via.placeholder.com/80",
      price: 12.00,
      discountPrice: 9.50,
      discount: "-21%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Rodillos de laminado",
      description: "Comprime láminas laminadas, extiende adhesivos y expulsa burbujas de aire para formar uniones fuertes",
      image: "https://via.placeholder.com/80",
      price: 45.00,
      discountPrice: 35.00,
      discount: "-22%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Ollas de pegamento",
      description: "Almacena adhesivos, cementos y lacas para evitar que se endurezcan",
      image: "https://via.placeholder.com/80",
      price: 40.00,
      discountPrice: 30.00,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Bloqueadores de roscas",
      description: "Cubre las roscas en los sujetadores roscados para evitar que se aflojen debido a impactos y vibraciones",
      image: "https://via.placeholder.com/80",
      price: 18.00,
      discountPrice: 13.50,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Activadores de adhesivo",
      description: "Agrega a adhesivos estructurales acrílicos sin mezcla para crear uniones fuertes",
      image: "https://via.placeholder.com/80",
      price: 28.00,
      discountPrice: 21.00,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Compuestos de retención",
      description: "Llena huecos para unir ejes, rodamientos, poleas, engranajes y otras partes metálicas cilíndricas",
      image: "https://via.placeholder.com/80",
      price: 33.00,
      discountPrice: 25.00,
      discount: "-24%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Cuentas espaciadoras de adhesivo",
      description: "Agrega a adhesivos estructurales e instantáneos para evitar que se derramen durante el prensado",
      image: "https://via.placeholder.com/80",
      price: 12.00,
      discountPrice: 9.00,
      discount: "-25%",
      priceOption1: 31.50,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    
    {
      title: "Imprimadores de adhesivo",
      description: "Prepara superficies antes de agregar adhesivos para mejorar la resistencia de la unión",
      image: "https://via.placeholder.com/80",
      price: 22.00,
      discountPrice: 16.50,
      discount: "-25%",
      priceOption1: 31.88,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Aceleradores de adhesivo",
      description: "Acelera el tiempo que tarda el adhesivo en alcanzar su máxima resistencia",
      image: "https://via.placeholder.com/80",
      price: 19.00,
      discountPrice: 14.50,
      discount: "-24%",
      priceOption1: 31.88,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Fluido antideslizante",
      description: "Aplicar en las cabezas de los sujetadores para evitar que destornilladores, llaves y alicates se deslicen",
      image: "https://via.placeholder.com/80",
      price: 15.00,
      discountPrice: 11.00,
      discount: "-27%",
      priceOption1: 31.88,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    },
    {
      title: "Cinta",
      description: "Une, sella y marca superficies",
      image: "https://via.placeholder.com/80",
      price: 10.00,
      discountPrice: 7.50,
      discount: "-25%",
      priceOption1: 31.88,
      priceOption2: 37.50,
      priceOption3: 43.75,
      priceOption4: 50.00,
      priceOption5: 56.25,
      priceOption6: 62.50,
      priceOption7: 68.75,
      categoriaId: 2
    }
    
    
  ];
  try {

    for (const product of productsferre) {
      const exists = await ProductoFerreteria.findOne({
        where: { title: product.title },
      });

      if (!exists) {
        // Crear solo si no existe
        await ProductoFerreteria.create(product);
      }
    }
    console.log("Products inserted or already exist!");
  } catch (error) {
    console.error("Error inserting products:", error);
  }
}


 
ProductoInsertferre() 
UsuarioInsert()
CategoriaInsert()
PagoInsert()
PedidoInsert() 
ProductoInsert() 

