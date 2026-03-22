import { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { CreateUserDTO, User } from "../types/User";

export class UserModel{   
    constructor(private db: Pool){}

    async findAll(): Promise<User[]> {
        const [rows] = await this.db.query<RowDataPacket[]>("SELECT * FROM users")
        return rows as User[];
    }

    async findById(id: number): Promise<User | undefined> {
        const [rows] = await this.db.query<RowDataPacket[]>(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        return rows[0] as User
    }

    async create(user: CreateUserDTO): Promise<User>{
        const [result] = await this.db.query<ResultSetHeader>(
            "INSERT INTO users(id, name, email) VALUES (NULL,?,?)",
            [user.name, user.email]
        )
        return{
            id: result.insertId,
            name: user.name,
            email: user.email
        }
    }

    update(id: number, data: Partial<User>): User | undefined{
        return {} as User;
    }

    delete(id: number): boolean{
        return true
    }
}