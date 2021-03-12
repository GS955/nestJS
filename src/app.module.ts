import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BlankModule } from './1.Mod/1.blank/blank.module';
import { LoginModule } from './1.Mod/login/login.module';
import { MariadbModule } from '@syukurilexs/nestjs-mariadb'
import { config } from 'config';

const dbInfo = config.GET_DB_INFO();
console.log('dbInfo : ', dbInfo)

@Module({
  imports: [ 
    LoginModule, BlankModule, LoginModule,
    MariadbModule.forRoot({
      host: dbInfo.host,
      user: dbInfo.user,
      database : dbInfo.database,
      password: dbInfo.password,
      connectionLimit: 3,
      dateStrings : true,
      autoJsonMap : true
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
