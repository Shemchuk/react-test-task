import IPost from '../models/post';

export default interface IState {
  isLoggedAdmin: boolean;
  posts: IPost[];
  currentPage: number;
}
