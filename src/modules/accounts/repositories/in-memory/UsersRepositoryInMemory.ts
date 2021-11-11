import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = []
  create({ drive_license, email, name, password }: ICreateUserDTO): Promise<void> {

    const user = new User()

    Object.assign(user, {
      drive_license,
      email,
      name,
      password
    })
  }
  findByEmail(email: string): Promise<User> {

  }
  findById(user_id: string): Promise<User> {

  }

}

export { UsersRepositoryInMemory }