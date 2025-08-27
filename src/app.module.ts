import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolModule } from './rol/rol.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [UsersModule, RolModule, EmpresaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
