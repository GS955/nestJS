import { IsString } from 'class-validator';

export class LoginDto {
  @IsString() readonly UR_ID: string;
  @IsString() readonly UR_PW: string;
}
