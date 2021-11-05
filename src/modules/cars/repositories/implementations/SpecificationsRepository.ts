import { Specification } from "../../entities/Specification";
import { ISpecificatiosRepository, ICreateSpecificationDTO } from "../ISpecificatiosRepository";


class SpecificationRepository implements ISpecificatiosRepository {
  private specifications: Specification[]

  private static INSTANCE: SpecificationRepository

  constructor() {
    this.specifications = []
  }

  public static getIntance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository()
    }
    return SpecificationRepository.INSTANCE
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