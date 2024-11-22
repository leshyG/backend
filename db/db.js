import { Sequelize } from "sequelize";
export const sequelize= new Sequelize('container_db','gonzalo','grupo9.com',{
    host: 'localhost',
    dialect: 'postgres'
});