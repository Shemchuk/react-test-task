import IState from './state';
import { ActionTypes, SET_IS_LOGGED_ADMIN, LOAD_POSTS, SET_CURRENT_PAGE } from './actions';

const initialState: IState = {
  isLoggedAdmin: false,
  posts: [],
  currentPage: 1,
};

export default function reducer(state = initialState, action: ActionTypes): IState {
  switch (action.type) {
    case SET_IS_LOGGED_ADMIN:
      return { ...state, isLoggedAdmin: action.payload };
    case LOAD_POSTS:
      return { ...state, posts: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
}
