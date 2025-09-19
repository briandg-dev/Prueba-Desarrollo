import { Injectable } from "@nestjs/common";
import { Users } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.services";
import { createUserDto } from "./dto/create-users";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}
   
    //GET ALL
    async getAllUsers(): Promise<Users[]> {
        return this.prisma.users.findMany();
    }
    //GETONE
    async getUserById(id: number): Promise<Users | null> {
        return this.prisma.users.findUnique({
            where: {
                 id
            }
        });
    }

    async getUserByEmail(email: string): Promise<Users | null> {
        return this.prisma.users.findUnique({
            where: {
                 email
            }
        });
    }
    async getUserByDocument(tipoDocumento: number,numeroDocumento: string): Promise<Users | null> {
        return this.prisma.users.findUnique({
            where: {
            tipoDocumento_numeroDocumento: {
                tipoDocumento,
                numeroDocumento
            }
            }
        });
    }
    
    
    //CREATE
    async create(data: createUserDto): Promise<User> {
        return this.prisma.users.create({data});
    }
    
    //UPDATE
    async updateUser(id: number,data: Users): Promise<Users> {
        return this.prisma.users.update({
            where: {
                id
            },
            data
        });
    }
    
    //DELETE
    async deleteUser(id: number): Promise<Users | null> {
        return this.prisma.users.delete({
            where: {
                 id
            }
        });
    }
    
}