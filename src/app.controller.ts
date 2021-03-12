import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { config } from '../config';
import fastifyCookie, { CookieSerializeOptions } from 'fastify-cookie';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('_blank.ejs')
  root(@Req() req: FastifyRequest, @Res({ passthrough: true }) res : FastifyReply) {
    // let user = { IDX: '7', UR_ID: 'admin', UR_NM: '관리자', UR_LV: '9' };
    return {
      page: 'login',
      core: 'default',
      layout: 'login_layout',
      cookie : req.cookies,
      ...config,
    };
  }
}
