import { combineReducers } from 'redux';

import books from './books';
import font from './font';
import theme from './themes';
import user from './user';

export default combineReducers({ theme, font, user, books });
