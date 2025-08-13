import { Decimal } from "@prisma/client/runtime/library";

export interface IIncomeDTO {
  id: string;
  userId: string;
  amount: Decimal;
  name: string;
  incomeDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IIncomeResponseDTO {
  id: string;
  userId: string;
  amount: Decimal;

  name: string;
  incomeDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateIncomeDTO {
  userId: string;
  amount: Decimal;
  name: string;
  incomeDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDeleteIncomeOutputDTO {
  message: string;
}

export interface IUpdateIncomeDTO {
  amount: Decimal;
  name: string;
  updatedAt: Date;
}
