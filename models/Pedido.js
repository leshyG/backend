import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Usuario } from "./Usuario.js";
import { ProductoFerreteria } from "./ProductoFerreteria.js";
import { Producto} from "./Producto.js";

export const Pedido = sequelize.define(
    "Pedido", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: DataTypes.DATE
        },
        estado: {
            type: DataTypes.STRING
        },
        pago: {
            type: DataTypes.FLOAT
        }
    }, {
        freezeTableName: true
    }

);

export const Pedido_Producto = sequelize.define(
    "Pedido_Producto", {
        cantidad: {
            type: DataTypes.INTEGER
        },
        precioU: {
            type: DataTypes.FLOAT
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);

export const Pedido_ProductoFerreteria = sequelize.define(
    "Pedido_ProductoFerreteria", {
        cantidad: {
            type: DataTypes.INTEGER
        },
        precioU: {
            type: DataTypes.FLOAT
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);



Usuario.hasMany(Pedido, {
    foreignKey: "usuarioId",
    targetKey: "id"
});
Pedido.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    targetKey: "id"
});

Producto.belongsToMany(Pedido, {
    through: Pedido_Producto
});

Pedido.belongsToMany(Producto, {
    through: Pedido_Producto
});
ProductoFerreteria.belongsToMany(Pedido, {
    through: Pedido_ProductoFerreteria
});

Pedido.belongsToMany(ProductoFerreteria, {
    through: Pedido_ProductoFerreteria
});

