import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenderModule } from './gender/gender.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [GenderModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
