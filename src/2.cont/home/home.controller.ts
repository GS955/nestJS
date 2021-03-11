import { Controller, Get, Render } from '@nestjs/common';
import { get } from 'node:http';

@Controller('home')
export class HomeController {
    
    @Get('/')
    @Render('layout/default_layout.ejs')
    root(){
        return {WWW_TIT : 'MVC3', WWW_DESC : 'MVC3_Desc'}
    }
}
