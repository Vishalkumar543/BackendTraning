import dotenv from "dotenv";


import {dbConnection} from "./db/db.js"

dotenv.config({
    path:'./env'
})



dbConnection()