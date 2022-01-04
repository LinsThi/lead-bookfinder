import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserType } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    username: '',
    password: '',
    avatar: '',
    email: '',
  },
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserType.USER_LOGIN:
      return {
        ...state,
        currentUser: {
          username: payload.username,
          password: payload.password,
          avatar: '',
          email: '',
        },
        isLogged: true,
      };
    case UserType.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
