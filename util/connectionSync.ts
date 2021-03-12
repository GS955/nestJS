import { Mariadb, Pool } from "@syukurilexs/nestjs-mariadb";

export class ConnectionSync {
    constructor(@Mariadb() private readonly pool: Pool){}

    query = async sql => {
        let result = await this.pool.query('select * from USER limit 1');
        console.log( '### : ', result.length )
        return result
    };

}
