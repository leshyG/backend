import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Producto } from "./Producto.js";

export const Categoria = sequelize.define(
    "Categoria", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);
Categoria.hasMany(Producto, {
    foreignKey: "categoriaId",
    targetKey: "id"
});
Producto.belongsTo(Categoria, {
    foreignKey: "categoriaId",
    targetKey: "id"
});