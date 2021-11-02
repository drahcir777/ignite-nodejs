import { ISpecificatiosRepository } from "../repositories/ISpecificatiosRepository"

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationServices {

  constructor(private specificationsRepository: ISpecificatiosRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationsRepository.findByName(name)

    if (specificationAlreadyExist) {
      throw new Error("Specification Already Exist!")
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationServices }