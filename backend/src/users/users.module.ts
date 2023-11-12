import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // Ścieżka do Twojej encji User

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Dodaj to
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Eksportuj UsersService jeśli ma być używany w innym module
})
export class UsersModule {}
