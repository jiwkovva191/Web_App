import { Router } from "express"
import { UserController } from "../controllers/user.controller";

const userRoutes = Router();

const userController = new UserController();

userRoutes.get('/users', userController.getAll)

userRoutes.get('/users/:id', userController.findById)

userRoutes.post('/users', userController.create)

userRoutes.put('/users/:id', userController.update)

userRoutes.delete('/users/:id', userController.delete)

export default userRoutes;