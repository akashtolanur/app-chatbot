import app from "./app.js";
import { configDotenv } from "dotenv";
configDotenv();

app.listen(process.env.PORT, ()=>{
    console.log("Server listening on", process.env.PORT);
})