import { Decimal } from "@prisma/client/runtime/library";
import { createUUID } from "../../../../shared/container/utils/createUUID";
import { ICreateIncomeDTO, IIncomeResponseDTO } from "../DTOS/incomeDTO";

export class Income {
  private id: string;
  private userId: string;
  private amount: Decimal;
  private name: string;
  private incomeDate: Date;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(props: ICreateIncomeDTO, id?: string) {
    this.id = id || createUUID();
    this.userId = props.userId;
    this.amount = props.amount;
    this.name = props.name;
    this.incomeDate = props.incomeDate;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public getAmount(): Decimal {
    return this.amount;
  }

  public setAmount(amount: Decimal): void {
    this.amount = amount;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getIncomeDate(): Date {
    return this.incomeDate;
  }

  public setIncomeDate(incomeDate: Date): void {
    this.incomeDate = incomeDate;
  }

  public getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  public static create(props: ICreateIncomeDTO, id?: string): Income {
    return new Income(props, id);
  }

  public toDTO(): IIncomeResponseDTO {
    return {
      id: this.id,
      userId: this.userId,
      amount: this.amount,
      name: this.name,
      incomeDate: this.incomeDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
