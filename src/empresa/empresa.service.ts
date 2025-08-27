import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from "src/prisma/prisma.services";
import { Empresa } from './entities/empresa.entity';


@Injectable()
export class EmpresaService {
    constructor(private prisma: PrismaService) {}
    //CREATE 
    async create(data: CreateEmpresaDto): Promise<Empresa> {
        return this.prisma.empresa.create({data});}

    //GET ALL
    findAll(): Promise<Empresa[]> {
        return this.prisma.empresa.findMany();
    }

    //GETONE
    async findById(id: number): Promise<Empresa | null> {
        return this.prisma.empresa.findUnique({
            where: {
                 id
            }
        });
    }

    //UPDATE
    async update(id: number, data: UpdateEmpresaDto) {
        return this.prisma.users.update({
            where: {
                id
            },
            data
        });
    }

    //DELETE
    async remove(id: number): Promise<Empresa | null> {
        return this.prisma.empresa.delete({where: {id}});
    }
}
