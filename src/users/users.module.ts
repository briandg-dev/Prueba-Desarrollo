import { Module } from "@nestjs/common";
import { UsersController } from "./users.controllers";
import { UsersService } from "./users.services";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}