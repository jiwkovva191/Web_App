import { UserModel } from "../models/user.model";
import { User } from "../types/User";

export class UserService {

        constructor(private userModel: UserModel){

        }

        getAllUsers(): User[] {
            return this.userModel.findAll();
        }
        
    
        getUserById(id: string): User | undefined {
            return this.userModel.findById(id)
        }
        
        //data holds the data for the user creation
        createUser(data: { name: string, email: string}): User {
            const id = Date.now().toString()
            const user: User = {id, ...data}
            return this.userModel.create(user)
        }
        updateUser(id: string, data: Partial<User>): User | undefined {
            return this.userModel.update(id, data)
        }
    
        deleteUser(id:string): boolean {
            return this.userModel.delete(id)
        }
}