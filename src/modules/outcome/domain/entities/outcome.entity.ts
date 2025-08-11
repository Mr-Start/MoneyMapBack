import { createUUID } from "../../../../shared/container/utils/createUUID";
import { ICreateOutcomeDTO } from "../DTOS/outcomeDTO";

export class Outcome {
  private id: string;
  private userId: string;
  private amount: number;
  private name: string;
  private category: string;
  private date?: Date;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(props: ICreateOutcomeDTO, id?: string) {
    this.id = id || createUUID();
    this.userId = props.userId;
    this.amount = props.amount;
    this.name = props.name;
    this.category = props.category;
    this.date = props.date;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }

  get getId(): string {
    return this.id;
  }

  get getUserId(): string {
    return this.userId;
  }

  get getAmount(): number {
    return this.amount;
  }

  get getName(): string {
    return this.name;
  }

  get getCategory(): string {
    return this.category;
  }

  get getDate(): Date | undefined {
    return this.date;
  }

  get getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  get getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  set setAmount(amount: number) {
    this.amount = amount;
  }

  set setName(name: string) {
    this.name = name;
  }

  set setCategory(category: string) {
    this.category = category;
  }

  set setDate(date: Date | undefined) {
    this.date = date;
  }

  set setUpdatedAt(date: Date | undefined) {
    this.updatedAt = date;
  }
}
