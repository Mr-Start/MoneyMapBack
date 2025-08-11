import { createUUID } from "../../../../shared/container/utils/createUUID";
import { ICreateUserDTO, IUserDTO } from "../DTOS/userDTO";

export class User {
  private id: string;
  private email: string;
  private password: string;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(props: ICreateUserDTO, id?: string) {
    this.id = id || createUUID();
    this.email = props.email;
    this.password = props.password;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }

  //getters
  get getId(): string {
    return this.id;
  }

  get getEmail(): string {
    return this.email;
  }

  get getPassword(): string {
    return this.password;
  }

  get getCreatedAt() {
    return this.createdAt;
  }

  get getUpdatedAt() {
    return this.updatedAt;
  }

  //setters

  set setEmail(email: string) {
    this.email = email;
  }

  set setPassword(password: string) {
    this.password = password;
  }

  set setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }

  //methods
  public static create(props: ICreateUserDTO, id?: string): User {
    return new User(props, id);
  }

  public toDTO(): IUserDTO {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
