import Lang from '../models/lang';
import ICountry from '../models/country';
import { IWeather } from '../models/weather';
import IPost from '../models/post';

export default interface IState {
  isLoggedAdmin: boolean;
  posts: IPost[];

  // !OLD DATA - ERASE
  language: Lang;
  countryList: ICountry[];
  selectedCountry?: ICountry;
  weather: IWeather;
  filterCountry: string;
  isMainPage: boolean;

}
