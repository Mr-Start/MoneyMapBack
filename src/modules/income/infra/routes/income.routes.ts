import { Request, Response, Router } from "express";
import { UpdateIncomeService } from "../../application/updateIncomeService";
import { IncomeRepository } from "../repositories/IncomeRepository";
import { CreateIncomeService } from "../../application/createIncomeService";
import { resolveController } from "../../../../shared/infra/http/adapters/resolverController";
import { IncomeController } from "../controllers/income.controller";

export const incomeRoute = Router();

const incomeRepository = new IncomeRepository();
const incomeController = new IncomeController(incomeRepository);

incomeRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await incomeController.handleCreate(req, res);
  })
);

incomeRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await incomeController.handleUpdate(req, res);
  })
);

incomeRoute.get(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await incomeController.handleFindByDate(req, res);
  })
);

incomeRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await incomeController.handleFindById(req, res);
  })
);

incomeRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await incomeController.handleDelete(req, res);
  })
);
