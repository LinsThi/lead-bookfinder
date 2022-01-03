import { combineReducers } from 'redux';

import font from './font';
import theme from './themes';

export default combineReducers({ theme, font });
