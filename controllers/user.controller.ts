import {Request, Response} from "express";
import { UserService } from "../services/user.service";

interface IdParams {
    id: string
}

export class UserController{

    constructor(private userService: UserService){}

    getAll = (req: Request, res: Response): void=>{

        const users = this.userService.getAllUsers()

        res.json({
            message : 'User found',
            data: users
        })
    }

    getById = (req: Request<IdParams>, res: Response): void=>{
        
        const user = this.userService.getUserById(req.params.id)
        if(!user){
            res.status(404).json({
                'message' : 'User not found'
            })
            return
        }
        res.json({
            message : 'User found',
            data :user
        })
    }
    
    create = (req: Request, res: Response): void=>{
        const { name, email } = req.body
        const user = this.userService.createUser({ name, email })
        res.status(201).json({
            message : 'User created',
            data : user
        })
    }

    update = (req: Request<IdParams>, res: Response): void=>{
        const user = this.userService.updateUser(req.params.id, req.body)

        if(!user){
            res.status(404).json({
                'message' : 'User not found'
            })
            return
        }
        res.json({
            message : 'User updated',
            data : user
        })
    }

    delete = (req: Request<IdParams>, res: Response): void=>{
        const deleted = this.userService.deleteUser(req.params.id)
        if(!deleted){
            res.status(404).json({
                'message':'User not found'
            })
            return
        }
        res.json({
            'message':'User deleted'
        })
    }
}