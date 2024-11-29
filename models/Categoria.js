import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Producto } from "./Producto.js";
import { ProductoFerreteria } from "./ProductoFerreteria.js";

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
Categoria.hasMany(ProductoFerreteria, {
    foreignKey: "categoriaId",
    targetKey: "id"
});
ProductoFerreteria.belongsTo(Categoria, {
    foreignKey: "categoriaId",
    targetKey: "id"
});