import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [UsersModule, RolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
