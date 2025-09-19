import { Injectable } from "@nestjs/common";
import { Sector } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.services";
import { SectorCreateDto } from "./dto/create-sector";

@Injectable()
export class SectorService {
    constructor(private prisma: PrismaService) {}
    //GET ALL
        async getAllSector(): Promise<Sector[]> {
            return this.prisma.sector.findMany();
        }
        //GETONE
        async getSectorById(id: number): Promise<Sector | null> {
            return this.prisma.sector.findUnique({
                where: {
                     id
                }
            });
        }
        //GETOneDescripcion
        async getSectorByDesc(descripcion: string): Promise<Sector | null> {
            return this.prisma.sector.findFirst({
                where: {
                     descripcion
                }
            });
        }
        
        //CREATE
        async createSector(data: SectorCreateDto): Promise<Sector> {
            return this.prisma.sector.create({
                data
            });
        }
        
        //UPDATE
        async updateSector(id: number,data: SectorCreateDto): Promise<Sector> {
            return this.prisma.sector.update({
                where: {
                    id
                },
                data
            });
        } 
        
        //DELETE
        async deleteSector(id: number): Promise<Sector | null> {
            return this.prisma.sector.delete({
                where: {
                     id
                }
            });
        }
}