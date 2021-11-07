import { inject, injectable } from "tsyringe"
import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository"

interface IRequest {
  name: string
  description: string
}
@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificatiosRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist = await this.specificationsRepository.findByName(name)

    if (specificationAlreadyExist) {
      throw new Error("Specification Already Exist!")
    }
    await this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }