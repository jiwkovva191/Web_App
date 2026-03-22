import { UserModel } from "../models/user.model";
import { CreateUserDTO, User } from "../types/User";

export class UserService {

        constructor(private userModel: UserModel){}

        async getAllUsers(): Promise<User[]> {
            return await this.userModel.findAll();
        }
        
    
        async getUserById(id: number): Promise<User | undefined>{
            return await this.userModel.findById(id)
        }
        
        async createUser(data: CreateUserDTO): Promise<User> {
            return await this.userModel.create(data)
        }

        updateUser(id: number, data: Partial<User>): User | undefined {
            return this.userModel.update(id, data)
        }
    
        deleteUser(id:number): boolean {
            return this.userModel.delete(id)
        }
}