import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HomeModule } from './1.mod/home/home.module';

@Module({
  imports: [HomeModule],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}
