import { Injectable } from "@nestjs/common";
import { Roles } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.services";
import { RolDto } from "./dto/rol.dto";

@Injectable()
export class RolService {

    constructor(private prisma: PrismaService) {}
   
    //GET ALL
    async getAllRol(): Promise<Roles[]> {
        return this.prisma.roles.findMany();
    }
    //GETONE
    async getRolById(id: number): Promise<Roles | null> {
        return this.prisma.roles.findUnique({
            where: {
                 id
            }
        });
    }
    
    //CREATE
    async createRol(data: RolDto): Promise<Roles> {
        return this.prisma.roles.create({
            data
        });
    }
    
    //UPDATE
    async updateRol(id: number,data: RolDto): Promise<Roles> {
        return this.prisma.roles.update({
            where: {
                id
            },
            data
        });
    } 
    
    //DELETE
    async deleteRol (id: number): Promise<Roles | null> {
        return this.prisma.roles.delete({
            where: {
                 id
            }
        });
    }
    
}