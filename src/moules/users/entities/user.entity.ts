// 用户实体
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

// 定义用户类型--user/admin
export enum UserType {
  USER = 'user',
  ADMIN = 'admin',
}
// 定义用户实体
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  // 用户用户名要求具有唯一性
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserType, default: UserType.USER })
  type: UserType;

  //定义用户邮箱
  //邮箱要求具有唯一性
  @Column({ unique: true })
  email: string;

  //定义用户头像
  @Column({ nullable: true })
  avatar: string;
}
