import { v4 as uuidV4 } from "uuid";
import{Column, Entity} from 'typeorm'

@Entity("users")
class User {
  @Column()
  id?: string;

  @Column()
  name: string;

  @Column()
  admin: boolean;

  @Column()
  email: string;

  @Column()
  created_at: Date;
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
    this.admin = false;
  }
}

export { User };
