import { Injectable } from "@nestjs/common";
import { Users } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.services";

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    async getAllUsers(): Promise<Users[]> {
        return this.prisma.users.findMany();
    }

    async getUserById(id: number): Promise<Users | null> {
        return this.prisma.users.findUnique({
            where: {
                 id
            }
        });
    }

     async createUser(data: Users): Promise<Users> {
        return this.prisma.users.create({
            data
        });
    }
}