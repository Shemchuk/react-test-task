import IPost from '../models/post';
import IState from './state';
import axios from 'axios';

export const SET_IS_LOGGED_ADMIN = 'SET_IS_LOGGED_ADMIN';
export const LOAD_POSTS = 'LOAD_POSTS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

// Actions
export function loadPostsAction(posts: IPost[]): ILoadPosts {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
}

export function setIsLoggedAdminAction(isLoggedAdmin: boolean = false): ISetIsLoggedAdmin {
  window.localStorage.setItem('test__isLoggedAdmin', JSON.stringify(isLoggedAdmin));
  return {
    type: SET_IS_LOGGED_ADMIN,
    payload: isLoggedAdmin,
  };
}

export function setCurrentPageAction(currentPage: number = 1): ISetCurrentPage {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
}

interface ILoadPosts {
  type: typeof LOAD_POSTS;
  payload: IPost[];
}

interface ISetIsLoggedAdmin {
  type: typeof SET_IS_LOGGED_ADMIN;
  payload: boolean;
}

interface ISetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export type ActionTypes = ISetIsLoggedAdmin | ILoadPosts | ISetCurrentPage;

export const appActions = {
  // Action (thunk) - load all posts from public api into store
  loadPosts: () => (dispatch: (action: any) => void, getState: () => IState) => {
    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = res.data;
      dispatch(loadPostsAction(posts));
    }
    fetchPosts();
  },

  setIsLoggedAdmin: setIsLoggedAdminAction,
  setCurrentPage: setCurrentPageAction,
};
