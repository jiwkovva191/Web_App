import { UserModel } from "../models/user.model";
import { User } from "../types/User";

export class UserService {

        constructor(private userModel: UserModel){

        }

        getAll(): User[] {
            return this.userModel.findAll();
        }
        
    
        findById(id: string): User | undefined {
            return this.userModel.findById(id)
        }
        
        //data holds the data for the user creation
        create(data: { name: string, email: string}): User {
            const id = Date.now().toString()
            const user: User = {id, ...data}
            return this.userModel.create(user)
        }
        update(id: string, user: Partial<User>): User | undefined {
            return this.userModel.update(id, user)
        }
    
        delete(id:string): boolean {
            return this.userModel.delete(id)
        }
}