import { Router } from "express"
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { UserModel } from "../models/user.model";
import { User } from "../types/User";


const userRoutes = Router();

// TODO: replace with DB records
const users = new Map<string, User>()
const userModel = new UserModel(users)
const userService = new UserService(userModel)
const userController = new UserController(userService);

userRoutes.get('/users', userController.getAll)

userRoutes.get('/users/:id', userController.getById)

userRoutes.post('/users', userController.create)

userRoutes.put('/users/:id', userController.update)

userRoutes.delete('/users/:id', userController.delete)

export default userRoutes;