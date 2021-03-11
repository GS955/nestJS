import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @Render('_blank.ejs')
  getHello() {
    let user = { IDX: '7', UR_ID: 'admin', UR_NM: '관리자', UR_LV: '9' };
    return { page : 'home', WWW_TITLE : 'MVC3', WWW_DESC : 'MVC3_Desc', layout : 'default_layout', core : 'default', user : user }
  }
}
