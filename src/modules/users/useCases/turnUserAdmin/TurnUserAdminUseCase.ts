import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User | Error {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("a");      
      return new Error("Mensagem do erro");
    }

    const userAdmin = this.usersRepository.turnAdmin(user);

    return userAdmin;
  }
}

export { TurnUserAdminUseCase };