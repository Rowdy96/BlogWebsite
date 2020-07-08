import { UserAC } from './userAC';

export class PostAC {
  public id: number
  public postDescription: string;
  public creationDate: Date;
  public userId: string;
  public user: UserAC;
}
