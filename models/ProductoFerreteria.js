import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Pedido } from "./Pedido.js";

export const ProductoFerreteria = sequelize.define(
    "ProductoFerreteria", {
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

const Pedido_ProductoFerreteria = sequelize.define(
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

ProductoFerreteria.belongsToMany(Pedido, {
    through: Pedido_ProductoFerreteria
});

Pedido.belongsToMany(ProductoFerreteria, {
    through: Pedido_ProductoFerreteria
});