import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificatiosRepository {

  create({ name, description }: ICreateSpecificationDTO): void
  findByName(name: string): Specification
}

export { ISpecificatiosRepository, ICreateSpecificationDTO }