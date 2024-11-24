import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Usuario } from "./Usuario.js";

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
Usuario.hasMany(Pedido, {
    foreignKey: "usuarioId",
    targetKey: "id"
});
Pedido.belongsTo(Usuario, {
    foreignKey: "usuarioId",
    targetKey: "id"
});