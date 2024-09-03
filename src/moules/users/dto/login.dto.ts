// 一个集成的用户登录接口
// 用户可以使用邮箱验证码进行登录也可以使用邮箱密码进行登录

import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,16}$/, {
    message: '密码必须包含英文字母，且长度在8-16位之间',
  })
  password: string;

  @IsEmail({}, { message: '邮箱格式不正确' })
  @IsNotEmpty()
  email: string;
}
