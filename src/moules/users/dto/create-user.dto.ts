// 创建dto文件
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  @Matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,16}$/, {
    message: '密码必须包含英文字母，且长度在8-16位之间',
  })
  password: string;

  @IsEmail({},{ message: '邮箱格式不正确' })
  @IsNotEmpty()
  email: string;
}
