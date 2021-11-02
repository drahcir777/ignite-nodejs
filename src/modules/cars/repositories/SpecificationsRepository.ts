import { Specification } from "../model/Specification";
import { ISpecificatiosRepository, ICreateSpecificationDTO } from "./ISpecificatiosRepository";


class SpecificationRepository implements ISpecificatiosRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specification()
    Object.assign(specifications, {
      name,
      description,
      created_at: new Date
    })

    this.specifications.push(specifications)
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name)

    return specification
  }

}

export { SpecificationRepository }