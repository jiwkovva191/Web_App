import {Request, Response} from "express";

export class UserController{
    getAll = (req: Request, res: Response)=>{
        res.json({
            'message':'Users',
        })
    }

    findById = (req: Request, res: Response)=>{
        
        res.json({
            'message':'User'
        })
    }
    
    create = (req: Request, res: Response)=>{
        
        res.json({
            'message':'User created'
        })
    }

    update = (req: Request, res: Response)=>{
        
        res.json({
            'message':'User updated'
        })
    }

    delete = (req: Request, res: Response)=>{
        
        res.json({
            'message':'User deleted'
        })
    }
}