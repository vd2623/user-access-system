import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum UserRole {
  Employee = "Employee",
  Manager = "Manager",
  Admin = "Admin",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.Employee,
  })
  role: UserRole;
}
