// 更新用户的dto

import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

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
