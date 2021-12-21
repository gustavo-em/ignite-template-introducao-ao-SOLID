import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  execute({ user_id }): User[] | Error {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("Mensagem do erro");
      return new Error("Mensagem do erro");
    }

    if (user.admin === false) {
      throw new Error("Mensagem do erro");
      return new Error("Mensagem do erro");
    }
    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };