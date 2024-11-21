import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,          
  port: parseInt(process.env.DB_PORT || "5432"),  
  username: process.env.DB_USER,      
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_NAME,      
  entities: [__dirname + "/entities/*.{ts,js}"],  
  synchronize: true,                 
  logging: false                      
});
