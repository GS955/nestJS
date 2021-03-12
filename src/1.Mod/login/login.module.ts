import { Controller, Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service'
import { ConnectionSync } from '@Util/connectionSync'

@Module({
    imports : [],
    controllers : [LoginController],
    providers : [LoginService, ConnectionSync],
})
export class LoginModule {}
