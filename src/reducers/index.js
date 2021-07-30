import { combineReducers } from 'redux';
import Auth from './auth';
import News from './news';
import Admin from './admin';

export default combineReducers({
  Auth,
  News,
  Admin,
});
