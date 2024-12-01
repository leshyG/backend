import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";


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
      image: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.FLOAT // Precio original
      },
      discountPrice: {
        type: DataTypes.FLOAT // Precio con descuento
      },
      discount: {
        type: DataTypes.STRING // Descuento (ej. -21%)
      },
      priceOption1: {
        type: DataTypes.FLOAT // Precio 1
      },
      priceOption2: {
        type: DataTypes.FLOAT // Precio 2
      },
      priceOption3: {
        type: DataTypes.FLOAT // Precio 3
      },
      priceOption4: {
        type: DataTypes.FLOAT // Precio 4
      },
      priceOption5: {
        type: DataTypes.FLOAT // Precio 5
      },
      priceOption6: {
        type: DataTypes.FLOAT // Precio 6
      },
      priceOption7: {
        type: DataTypes.FLOAT // Precio 7
      },
      categoriaId: {
        type: DataTypes.INTEGER
      }
    }, {
      freezeTableName: true,
      timestamps: false
    }
  );
  