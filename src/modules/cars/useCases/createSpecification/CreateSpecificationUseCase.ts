import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository"

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {

  constructor(private specificationsRepository: ISpecificatiosRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExist) {
      throw new Error("Specification Already Exist!")
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }