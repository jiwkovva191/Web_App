import {Request, Response} from "express";
import { UserService } from "../services/user.service";

export class UserController{

    constructor(private userService: UserService){

    }

    getAll = (req: Request, res: Response)=>{

        const users = this.userService.getAll()

        res.json({
            'users' : users
        })
    }

    findById = (req: Request, res: Response)=>{
        
        const { id } = req.params
        const user = this.userService.findById(id as string)
        if(!user){
            res.json({
                'message' : 'User not found'
            })
            return
        }
        res.json({
            'user':user
        })
    }
    
    create = (req: Request, res: Response)=>{
        const { name, email } = req.body
        const user = this.userService.create({ name, email })
        res.json({
            'user': user
        })
    }

    update = (req: Request, res: Response)=>{
        const { id } = req.params
        const data = req.body
        const user = this.userService.update(id as string, data)

        if(!user){
            res.json({
                'message' : 'User not found'
            })
            return
        }
        res.json({
            'user': user
        })
    }

    delete = (req: Request, res: Response)=>{
        const { id } = req.params
        const deleted = this.userService.delete(id as string)
        if(!deleted){
            res.json({
                'message':'User not found'
            })
        }
        res.json({
            'message':'User deleted'
        })
    }
}