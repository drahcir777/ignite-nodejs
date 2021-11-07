import { container } from "tsyringe"
import { UserRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository"
import { ISpecificatiosRepository } from "../../modules/cars/repositories/ISpecificatiosRepository"


container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificatiosRepository>(
  "SpecificationRepository",
  SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UserRepository
)
