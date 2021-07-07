import IState from './state';
import { ActionTypes, SET_CURRENT_COUNTRY, SET_CURRENT_LANG, LOAD_COUNTRIES, SET_CURRENT_FILTER, SET_IS_MAIN_PAGE, SET_IS_LOGGED_ADMIN, LOAD_POSTS } from './actions';

const initialState: IState = {
  isLoggedAdmin: false,
  posts: [],

  // !OLD DATA BELOW - ERASE
  countryList: [],
  selectedCountry: undefined,
  language: 'ru',
  weather: {
    temperature: 32,
  },
  filterCountry: '',
  isMainPage: false,
};

export default function reducer(state = initialState, action: ActionTypes): IState {
  switch (action.type) {
    case SET_CURRENT_COUNTRY:
      return { ...state, selectedCountry: action.payload };
    case LOAD_COUNTRIES:
      return { ...state, countryList: action.payload };
    case SET_CURRENT_LANG:
      return { ...state, language: action.payload };
    case SET_CURRENT_FILTER:
      return { ...state, filterCountry: action.payload };
    case SET_IS_MAIN_PAGE:
      return { ...state, isMainPage: action.payload };

    // TODO: new initial state
    case SET_IS_LOGGED_ADMIN:
      return { ...state, isLoggedAdmin: action.payload };
    case LOAD_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}
