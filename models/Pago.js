import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";
import { Pedido } from "./Pedido.js";

export const Pago = sequelize.define(
    "Pago", {
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
Pedido.belongsTo(Pago, {
    foreignKey: "pagoId",
    targetKey: "id"
});
Pago.hasMany(Pedido, {
    foreignKey: "pagoId",
    targetKey: "id"
});