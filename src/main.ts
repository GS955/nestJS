import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import fastifyCookie from 'fastify-cookie';
import { config } from 'config';
import fastify from 'fastify';
import { Body, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  __dirname = __dirname.replace('dist/', '');
  app.use(bodyParser.json());
  app.register(fastifyCookie, { secret: config.COOKIE_KEY });
  app.useStaticAssets({ root: join(__dirname, '..', 'public') });
  app.setViewEngine({ engine: { ejs: require('ejs') }, templates: join(__dirname, '..', 'views') });
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist : true,
        forbidNonWhitelisted : true,
        transform : true,
      })
    )
  await app.listen(config.SERV_PORT, config.SERVER_IP);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
