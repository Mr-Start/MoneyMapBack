import { Request, Response, Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { CategoryRepository } from "../repositories/CategoryRepositry";
import { resolveController } from "../../../../shared/infra/http/adapters/resolverController";

export const categoryRoute = Router();

const categoryRepository = new CategoryRepository();
const categoryController = new CategoryController(categoryRepository);

categoryRoute.post(
  "/",

  resolveController(async (req: Request, res: Response) => {
    return await categoryController.handleCreate(req, res);
  })
);

categoryRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await categoryController.handleFindById(req, res);
  })
);

categoryRoute.get(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await categoryController.handleFindByCreateAt(req, res);
  })
);

categoryRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await categoryController.handleDelete(req, res);
  })
);

categoryRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await categoryController.handleUpdate(req, res);
  })
);
