import { ICreateOutcomeDTO, IOutcomeDTO, IUpdateOutcomeDTO,  } from "../../domain/DTOS/outcomeDTO";

const prisma = new PrismaClient();
export class OutcomeRepository implements IOutcomeRepository {
  async create(data: ICreateOutcomeDTO): Promise<IOutcomeResponseDTO> {
    const outcome = await prisma.outcome.create({
      data,
    });
    return outcome;
  }

  async list(): Promise<IOutcomeResponseDTO[]> {
    const outcomes = await prisma.outcome.findMany();
    return outcomes;
  }

  async findById(id: string): Promise<IOutcomeResponseDTO | null> {
    const outcome = await prisma.outcome.findUnique({
      where: { id },
    });
    return outcome;
  }

  async update(
    id: string,
    data: IUpdateOutcomeDTO
  ): Promise<IOutcomeResponseDTO> {
    const outcome = await prisma.outcome.update({
      where: { id },
      data,
    });
    return outcome;
  }

  async delete(id: string): Promise<void> {
    await prisma.outcome.delete({
      where: { id },
    });
  }
}
