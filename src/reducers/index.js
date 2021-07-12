import { combineReducers } from 'redux';
import Auth from './auth';
import News from './news';

export default combineReducers({
  Auth,
  News
});
