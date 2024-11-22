import { Sequelize } from "sequelize";
export const sequelize= new Sequelize('container_db','gonzalo','TKgposH3YKCse4BAIZMlUI8QpniEYxoI',{
    host: 'localhost',
    dialect: 'postgres'
});