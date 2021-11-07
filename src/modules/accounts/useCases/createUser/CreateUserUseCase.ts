import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";


@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ name, email, password, drive_license }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError("User already exists")
    }
    const passwordHash = await hash(password, 8)

    await this.usersRepository.create({
      name, email, password: passwordHash, drive_license
    })
  }
}

export { CreateUserUseCase }