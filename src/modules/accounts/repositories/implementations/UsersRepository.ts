import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UserRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ name, email, drive_license, password, username }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      drive_license,
      password,
      username
    })

    await this.repository.save(user)
  }
}

export { UserRepository }