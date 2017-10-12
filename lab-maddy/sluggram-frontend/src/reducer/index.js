
import {combineReducers} from 'redux';
import profile from './profile';
import auth from './auth';

export default combineReducers({
  auth,
  profile,
});
