export interface User {
    id: number;
    name: string;
    email: string
}

/*DTO - Data Transfer Object*/
export interface CreateUserDTO{
    name: string,
    email: string
}