import { PrismaModule } from "src/prisma/prisma.module";
import { Module } from "@nestjs/common";
import { SectorController } from "./sector.controller";
import { SectorService } from "./sector.service";


@Module({
    imports: [PrismaModule],
    controllers: [SectorController],
    providers: [SectorService],
    exports: [SectorService], 

})

export class SectorModule {}