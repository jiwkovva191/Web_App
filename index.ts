import express, { Application, json, NextFunction} from "express";
import userRoutes from "./routes/user.routes";

const app: Application= express();
const port = 3000;


app.use(json());

app.use(userRoutes)

app.listen(port, ()=>{
   console.log(`Listening on port ${port}`) 
})

