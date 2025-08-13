import { Request, Response } from "express";

import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/categorySchemas";
import { CreateCategoryService } from "../../application/createCategoryService";
import { FindCategoryByDateService } from "../../application/findCategoryByDateService";
import { FindCategoryByIdService } from "../../application/findCategoryByIdService";
import { DeleteCategoryService } from "../../application/deleteCategoryService";
import { UpdateCategoryService } from "../../application/updateCategoryService";
import {
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../../domain/DTOS/categoryDTO";
import { updateIncomeSchema } from "../../../income/infra/schemas/incomeSchemas";

export class CategoryController {
  constructor(private categoryRepository: ICategoryRepository) {}

  async handleCreate(req: Request, res: Response): Promise<Response> {
    const category: ICreateCategoryDTO = req.body;
    const parseResult = createCategorySchema.safeParse(category);

    if (!parseResult.success) {
      return res.status(400).json({
        message: parseResult.error.issues.map((e) => e.message).join(", "),
      });
    }

    const createCategoryService = new CreateCategoryService(
      this.categoryRepository
    );

    try {
      const response = await createCategoryService.execute(category);
      return res.status(201).json(response);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: error.message || "Internal server error" });
    }
  }

  async handleFindById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findCategoryByIdService = new FindCategoryByIdService(
      this.categoryRepository
    );
    const result = await findCategoryByIdService.execute(id);
    return res.status(200).json(result);
  }

  async handleFindByDate(req: Request, res: Response): Promise<Response> {
    let { userId, date } = req.body;
    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }
    if (!date) {
      date = new Date(); // Default to current date if not provided
    }
    const findCategoryByDateService = new FindCategoryByDateService(
      this.categoryRepository
    );
    const result = await findCategoryByDateService.execute(
      userId,
      new Date(date)
    );
    return res.status(200).json(result);
  }

  async handleDelete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteCategoryService = new DeleteCategoryService(
      this.categoryRepository
    );
    await deleteCategoryService.execute(id);
    return res.status(204).send();
  }

  async handleUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const category: IUpdateCategoryDTO = req.body;

    const parseResult = updateCategorySchema.safeParse(category);

    if (!parseResult.success) {
      return res.status(400).json({
        message: parseResult.error.issues.map((e) => e.message).join(", "),
      });
    }

    const updateCategoryService = new UpdateCategoryService(
      this.categoryRepository
    );
    const result = await updateCategoryService.execute(category, id);
    return res.status(200).json(result);
  }
}
