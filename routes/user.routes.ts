import { Router,  Request, Response } from "express"

const userRoutes = Router();

userRoutes.get('/', (req: Request, res: Response)=>{
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

userRoutes.get('/users', (req: Request, res: Response)=>{
    res.json(users)
})

userRoutes.get('/users/:id', (req: Request, res: Response)=>{
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

userRoutes.post('/users', (req: Request, res: Response)=> {
    const data = req.body
    
    users.push(data);

    res.json({
        message: "User created sucessfully"
    })
})

userRoutes.put('/users/:id', (req: Request, res: Response)=>{
    res.json({
        message: "User updated successfully"
    })
})


userRoutes.delete('/users/:id', (req: Request, res: Response)=>{
    res.json({
        message: "User deleted successfully"
    })
})