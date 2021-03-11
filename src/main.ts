import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
  });
  app.setViewEngine({
    engine: {
      ejs: require('ejs'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  await app.listen(4000, '192.168.0.88');
  
  console.log(`Application is running on: ${await app.getUrl()}`);
} 
bootstrap();