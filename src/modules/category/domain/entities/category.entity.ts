import { createUUID } from "../../../../shared/container/utils/createUUID";
import { ICategoryDTO, ICreateCategoryDTO } from "../DTOS/categoryDTO";

export class Category {
  id: string;
  fixedPercent: number;
  confortPercent: number;
  goalsPercent: number;
  joyPercent: number;
  investmentPercent: number;
  studyPercent: number;
  categoryDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;

  constructor(props: ICreateCategoryDTO, id?: string) {
    this.id = id || createUUID();
    this.fixedPercent = 30;
    this.confortPercent = 10;
    this.goalsPercent = 15;
    this.joyPercent = 15;
    this.investmentPercent = 25;
    this.studyPercent = 5;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.userId = props.userId;
    this.categoryDate = props.categoryDate;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getFixedPercent(): number {
    return this.fixedPercent;
  }

  setFixedPercent(fixedPercent: number): void {
    this.fixedPercent = fixedPercent;
  }

  getConfortPercent(): number {
    return this.confortPercent;
  }

  setConfortPercent(confortPercent: number): void {
    this.confortPercent = confortPercent;
  }

  getGoalsPercent(): number {
    return this.goalsPercent;
  }

  setGoalsPercent(goalsPercent: number): void {
    this.goalsPercent = goalsPercent;
  }

  getJoyPercent(): number {
    return this.joyPercent;
  }

  setJoyPercent(joyPercent: number): void {
    this.joyPercent = joyPercent;
  }

  getInvestmentPercent(): number {
    return this.investmentPercent;
  }

  setInvestmentPercent(investmentPercent: number): void {
    this.investmentPercent = investmentPercent;
  }

  getStudyPercent(): number {
    return this.studyPercent;
  }

  setStudyPercent(studyPercent: number): void {
    this.studyPercent = studyPercent;
  }

  getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }

  getUserId(): string {
    return this.userId;
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }

  getCategoryDate(): Date {
    return this.categoryDate;
  }

  setCategoryDate(categoryDate: Date): void {
    this.categoryDate = categoryDate;
  }

  public static create(props: ICreateCategoryDTO, id?: string): Category {
    return new Category(props, id);
  }
  public toDTO(): ICategoryDTO {
    return {
      id: this.id,
      fixedPercent: this.fixedPercent,
      confortPercent: this.confortPercent,
      goalsPercent: this.goalsPercent,
      joyPercent: this.joyPercent,
      investmentPercent: this.investmentPercent,
      studyPercent: this.studyPercent,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      userId: this.userId,
      categoryDate: this.categoryDate,
    };
  }
}
