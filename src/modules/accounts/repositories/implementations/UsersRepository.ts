import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UserRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ name, email, drive_license, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      drive_license,
      password
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {

    const user = await this.repository.findOne({ email })
    return user
  }

  async findById(user_id: string): Promise<User> {

    const user = await this.repository.findOne({ id: user_id })
    return user
  }
}

export { UserRepository }