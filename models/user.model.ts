import { User } from "../types/User";

export class UserModel{
    // TODO: replace with db when available
    constructor(private users: Map<string, User>){
        
    }

    findAll(): User[]{
        return [...this.users.values()]
    }

    findById(id: string): User | undefined{
        return undefined
        // why in the basics code the following line is replaced with return undefined?
        //return this.users.get(id)
    }

    create(user: User){
        this.users.set(user.id, user)
        return user
    }

    update(id: string, data: Partial<User>): User | undefined{
        const existingUser = this.users.get(id)
        if(!existingUser){
            return undefined
        }

        // TODO: ???
        const updatedUser = {...existingUser, ...data, id}
        this.users.set(id, updatedUser)
        return updatedUser

    }

    delete(id: string): boolean{
        return this.users.delete(id)
    }
}