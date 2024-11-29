import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique:true
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
            defaultValue: "",
            unique:true
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true
    }
);