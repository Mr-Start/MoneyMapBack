export class OutcomeController {
  constructor(
    private outcomeRepository: IOutcomeRepository,
    private hashProvider: IHashProvider
  ) {}
}