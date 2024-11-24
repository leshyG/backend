import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Pedido } from "./Pedido.js";

export const Producto = sequelize.define(
    "Producto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        },
        discountPrice: {
            type: DataTypes.FLOAT
        },
        discount: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

const Pedido_Producto = sequelize.define(
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

Producto.belongsToMany(Pedido, {
    through: Pedido_Producto
});

Pedido.belongsToMany(Producto, {
    through: Pedido_Producto
});