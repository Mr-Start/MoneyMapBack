import { Request, Response } from "express";
import { IncomeRepository } from "../repositories/IncomeRepository";
import { UpdateIncomeService } from "../../application/updateIncomeService";
import { CreateIncomeService } from "../../application/createIncomeService";
import { ICreateIncomeDTO } from "../../domain/DTOS/incomeDTO";
import { createIncomeSchema } from "../schemas/incomeSchemas";
import { DeleteIncomeService } from "../../application/deleteIncomeService";
import { FindByIdIncomeService } from "../../application/findByIdIncomeService";
import { FindIncomeByDateService } from "../../application/findByDateIncomeService";

export class IncomeController {
  constructor(private incomeRepository: IncomeRepository) {}

  async handleCreate(req: Request, res: Response): Promise<Response> {
    const income: ICreateIncomeDTO = req.body;
    const parseResult = createIncomeSchema.safeParse(income);
    if (!parseResult.success) {
      return res.status(400).json({
        message: parseResult.error.issues.map((e) => e.message).join("\n"),
      });
    }

    const createIncomeService = new CreateIncomeService(this.incomeRepository);
    const result = await createIncomeService.execute(parseResult.data);
    return res.status(201).json(result);
  }

  async handleUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const incomeData = req.body;
    const updatedIncomeService = new UpdateIncomeService(this.incomeRepository);
    const result = await updatedIncomeService.execute(id, incomeData);
    return res.status(200).json(result);
  }

  async handleFindById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findByIdIncomeService = new FindByIdIncomeService(
      this.incomeRepository
    );
    const result = await findByIdIncomeService.execute(id);
    return res.status(200).json(result);
  }

  async handleFindByDate(req: Request, res: Response): Promise<Response> {
    const { userId, incomeDate } = req.body;
    const findIncomeByDateService = new FindIncomeByDateService(
      this.incomeRepository
    );
    const result = await findIncomeByDateService.execute(
      userId,
      new Date(incomeDate)
    );
    return res.status(200).json(result);
  }

  async handleDelete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteIncomeService = new DeleteIncomeService(this.incomeRepository);
    await deleteIncomeService.execute(id);
    return res.status(204).send();
  }
}
