import { Module } from '@nestjs/common';
import {BlankController} from './blank.controller';
import {BlankService} from './blank.service';


@Module({
    imports : [],     // 다른 모듈 추가시 
    controllers : [BlankController], // 사용할 컨트롤러 등록
    providers : [BlankService],   // 사용할 서비스 등록
})
export class BlankModule {}
