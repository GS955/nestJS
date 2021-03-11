import { Controller, Get, Render, Res } from '@nestjs/common';
import { CookieSerializeOptions } from 'fastify-cookie';
import { get } from 'node:http';
import { PassThrough } from 'node:stream';

@Controller('home')
export class HomeController {
  @Get('/')
  root(@Res( { passthrough : true} ) res) {
    let cookieOpt : CookieSerializeOptions = { maxAge : 30 * 60 * 24 * 60, secure : true };
    res.setCookie('gunsoo', '27');
    return ' 저장 완료 '
  }
}
