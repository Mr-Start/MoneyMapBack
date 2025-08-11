import { Request, Response } from "express";

import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { createCategorySchema } from "../schemas/categorySchemas";
import { CreateCategoryService } from "../../application/createCategoryService";
import { FindCategoryByCreateAtService } from "../../application/findCategoryByCreateAtService";
import { FindCategoryByIdService } from "../../application/findCategoryByIdService";
import { DeleteCategoryService } from "../../application/deleteCategoryService";
import { UpdateCategoryService } from "../../application/updateCategoryService";
import { ICreateCategoryDTO } from "../../domain/DTOS/categoryDTO";

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

  async handleFindByCreateAt(req: Request, res: Response): Promise<Response> {
    let { userId, createdAt } = req.body;
    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }
    if (!createdAt) {
      createdAt = new Date(); // Default to current date if not provided
    }
    const findCategoryByCreateAtService = new FindCategoryByCreateAtService(
      this.categoryRepository
    );
    const result = await findCategoryByCreateAtService.execute(
      userId,
      new Date(createdAt)
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
    const categoryData = req.body;

    const updateCategoryService = new UpdateCategoryService(
      this.categoryRepository
    );
    const result = await updateCategoryService.execute(categoryData, id);
    return res.status(200).json(result);
  }
}
