import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';
import fastifyCookie from 'fastify-cookie';
import { config } from 'config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  __dirname = __dirname.replace('dist/', '');
  app.register(fastifyCookie, {
    secret: config.COOKIE_KEY, // for cookies signature
  });
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
  });
  app.setViewEngine({
    engine: {
      ejs: require('ejs'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  await app.listen(config.SERV_PORT, config.SERVER_IP);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
