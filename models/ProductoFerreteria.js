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
        type: DataTypes.FLOAT
      },
      discountPrice: {
        type: DataTypes.FLOAT 
      },
      discount: {
        type: DataTypes.STRING 
      },
      priceOption1: {
        type: DataTypes.FLOAT 
      },
      priceOption2: {
        type: DataTypes.FLOAT 
      },
      priceOption3: {
        type: DataTypes.FLOAT 
      },
      priceOption4: {
        type: DataTypes.FLOAT 
      },
      priceOption5: {
        type: DataTypes.FLOAT 
      },
      priceOption6: {
        type: DataTypes.FLOAT 
      },
      priceOption7: {
        type: DataTypes.FLOAT 
      },
      categoriaId: {
        type: DataTypes.INTEGER
      }
    }, {
      freezeTableName: true,
      timestamps: false
    }
  );
  
