import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolModule } from './rol/rol.module';
import { EmpresaModule } from './empresa/empresa.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, RolModule, EmpresaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
