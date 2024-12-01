import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

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
