import { Controller, Post, Req, Body, Session } from "@nestjs/common";
import { LoginDto } from "@Root/3.Dto/UserDto";
import { ConnectionSync } from '@Util/connectionSync'

@Controller('login')
export class LoginController {
  constructor(
    private connectionSync : ConnectionSync,
  ) {}

  @Post('/loginCheck')
  async loginCheck(@Body() body : LoginDto) {
    console.log(body)
    let userid = body.UR_ID.toLowerCase();
    let passwd = body.UR_PW;
    let sql;
    // sql = 'select * from USER limit 1'
    sql = `SELECT * FROM USER where `;
    sql += `UR_ID='${userid}' and `;
    sql += `UR_PW=password('${passwd}')`;
    console.log(sql)
    let data = await this.connectionSync.query(sql);
    return {data : data}
    
  }

  @Post('/ok')
  logLogin(@Session() session, @Body() p) {
      let sql = `UPDATE USER SET LAST_DT=now() WHERE IDX=${p.IDX}`;
      //connectionSync.query(sql);
    
      session.user = {
        IDX: p.IDX,
        UR_ID: p.UR_ID,
        UR_NM: p.UR_NM,
        UR_LV: p.UR_LV
      };

      return { data : "ee" };
  }
}