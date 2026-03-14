import express, { Application, json, NextFunction} from "express";

const app: Application= express();
const port = 3000;


app.use(json());

app.listen(port, ()=>{
   console.log(`Listening on port ${port}`) 
})

