import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import appRoutes from "./appRoutes.js"

dotenv.config()

const app = express()

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
})

app.use(cors({
    origin: "*",
    methods:["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}))


app.use(express.json())
app.use("/api", appRoutes)

export default app