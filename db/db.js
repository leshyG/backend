import { Sequelize } from "sequelize";
export const sequelize= new Sequelize('container_db','gonzalo','grupo9.com',{
    host: 'localhost',
    dialect: 'postgres'
});

// host_cloud: dpg-csvv4v1opnds73a5ia00-a