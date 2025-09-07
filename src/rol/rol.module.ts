import { PrismaModule } from "src/prisma/prisma.module";
import { RolController } from "./rol.controller";
import { RolService } from "./rol.services";
import { Module } from "@nestjs/common";


@Module({
    imports: [PrismaModule],
    controllers: [RolController],
    providers: [RolService],
    exports: [RolService], 

})

export class RolModule {}