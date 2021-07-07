import IPost from '../models/post';
import IState from './state';

import ICountry from '../models/country';
import TLang from '../models/lang';
import axios from 'axios';

export const SET_CURRENT_COUNTRY = 'SET_CURRENT_COUNTRY';
export const SET_CURRENT_LANG = 'SET_CURRENT_LANG';
export const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';
export const SET_IS_MAIN_PAGE = 'SET_IS_MAIN_PAGE';
export const SET_IS_LOGGED_ADMIN = 'SET_IS_LOGGED_ADMIN';
export const LOAD_POSTS = 'LOAD_POSTS';

// Actions
export function loadPostsAction(posts: IPost[]): ILoadPosts {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
}

export function setCurrentCountry(country?: ICountry | undefined): ISetCurrentCountry {
  return {
    type: SET_CURRENT_COUNTRY,
    payload: country,
  };
}

export function loadCountriesAction(countries: ICountry[]): ILoadCountries {
  return {
    type: LOAD_COUNTRIES,
    payload: countries,
  };
}

export function setCurrentLang(lang: TLang = 'ru'): ISetCurrentLang {
  return {
    type: SET_CURRENT_LANG,
    payload: lang,
  };
}

export function setFilterCountryAction(filter: string = 'ru'): ISetFilterCountry {
  return {
    type: SET_CURRENT_FILTER,
    payload: filter,
  };
}

export function setIsMainPageAction(isMainPage: boolean = true): ISetIsMainPage {
  return {
    type: SET_IS_MAIN_PAGE,
    payload: isMainPage,
  };
}

export function setIsLoggedAdminAction(isLoggedAdmin: boolean = false): ISetIsLoggedAdmin {

  window.localStorage.setItem('test__isLoggedAdmin', JSON.stringify(isLoggedAdmin));

  return {
    type: SET_IS_LOGGED_ADMIN,
    payload: isLoggedAdmin,
  };
}

interface ILoadPosts {
  type: typeof LOAD_POSTS;
  payload: IPost[];
}

interface ISetCurrentCountry {
  type: typeof SET_CURRENT_COUNTRY;
  payload: ICountry | undefined;
}

interface ILoadCountries {
  type: typeof LOAD_COUNTRIES;
  payload: ICountry[];
}

interface ISetCurrentLang {
  type: typeof SET_CURRENT_LANG;
  payload: TLang;
}

interface ISetFilterCountry {
  type: typeof SET_CURRENT_FILTER;
  payload: string;
}

interface ISetIsMainPage {
  type: typeof SET_IS_MAIN_PAGE;
  payload: boolean;
}

interface ISetIsLoggedAdmin {
  type: typeof SET_IS_LOGGED_ADMIN;
  payload: boolean;
}

export type ActionTypes = ISetCurrentCountry | ISetCurrentLang | ILoadCountries | ISetFilterCountry | ISetIsMainPage | ISetIsLoggedAdmin | ILoadPosts;

export const appActions = {
  // Action (thunk) - load country by ID and Lang
  loadCountry: (id: number, lang: TLang) => (dispatch: (action: any) => void, getState: () => IState) => {
    const { selectedCountry } = getState();
    if (id === selectedCountry?.id && lang !== getState().language) {
      return;
    }
    dispatch(setCurrentCountry());
    fetch(`/api/countries/${id}?lang=${lang}`)
      .then((response) => response.json())
      .then((newCountry) => {
        dispatch(setCurrentCountry(newCountry));
      });
  },
  // Action (thunk) - load all countries by current Lang in store
  loadCountries: () => (dispatch: (action: any) => void, getState: () => IState) => {
    const { language } = getState();

    fetch(`/api/countries?lang=${language}`)
      .then((response) => response.json())
      .then((countries) => {
        dispatch(loadCountriesAction(countries));
      });
  },
  // Action (thunk) - load all posts from public api into store
  loadPosts: () => (dispatch: (action: any) => void, getState: () => IState) => {

    const fetchPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = res.data;
      console.log('Action loadPosts()');
      console.log(posts);
      dispatch(loadPostsAction(posts));

      //setPosts(res.data);
    }
    console.log('trying to load data with action loadPosts');
    fetchPosts();
  },
  setLang: setCurrentLang,
  setFilter: setFilterCountryAction,
  setIsMainPage: setIsMainPageAction,
  setIsLoggedAdmin: setIsLoggedAdminAction,
};
