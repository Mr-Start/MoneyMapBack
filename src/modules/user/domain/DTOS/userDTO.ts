export interface IUserDTO {
  id: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserResponseDTO {
  id: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUserDTO {
  email: string;
  password: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDeleteUserOutputDTO {
  message: string;
}

export interface IUpdateUserDTO {
  email: string;
}
