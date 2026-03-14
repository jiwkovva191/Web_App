import express, { Application, json, NextFunction, Request, Response } from "express";

const app: Application= express();
const port = 3000;


app.use(json());

app.listen(port, ()=>{
   console.log(`Listening on port ${port}`) 
})

app.get('/', (req: Request, res: Response)=>{
    res.json({
        message: "Hello  world"
    })
})

const users = [{
        id: 1,
        name: "Didka",
        isActive: true,
    }, {
        id: 2,
        name: "Bubeto",
        isActive: true
    }]

app.get('/users', (req: Request, res: Response)=>{
    res.json(users)
})

app.get('/users/:id', (req: Request, res: Response)=>{
    const { id } = req.params
    const { isActive, status } = req.query
    console.log(isActive, status)

    const requestedUser = users.find((user)=>{
        return user.id == Number(id)
    })

    if(!requestedUser){
        res.json({
            error: "User not found"
        })
    }
    
    res.json(requestedUser)
})

app.post('/users', (req: Request, res: Response)=> {
    const data = req.body
    
    users.push(data);

    res.json({
        message: "User created sucessfully"
    })
})

app.put('/users/:id', (req: Request, res: Response)=>{
    res.json({
        message: "User updated successfully"
    })
})


app.delete('/users/:id', (req: Request, res: Response)=>{
    res.json({
        message: "User deleted successfully"
    })
})