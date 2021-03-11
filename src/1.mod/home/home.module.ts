import { Module } from '@nestjs/common';
import { HomeController } from '@root/2.cont/home/home.controller';
import { HomeService } from '@root/3.svs/home/home.service';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
