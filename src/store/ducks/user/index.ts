import type { Reducer } from 'redux';

import type { UserState } from './types';
import { UserType } from './types';

const INITIAL_STATE: UserState = {
  currentUser: {
    username: '',
    password: '',
    avatar: '',
    email: '',
    birthDate: '',
    gender: {
      id: 0,
      label: '',
    },
  },
  isLogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  const { currentUser } = state;

  switch (type) {
    case UserType.USER_LOGIN:
      return {
        ...state,
        currentUser: {
          username: payload.username,
          password: payload.password,
          avatar: '',
          email: '',
          birthDate: '',
          gender: {},
        },
        isLogged: true,
      };
    case UserType.USER_UPDATE:
      return {
        ...state,
        currentUser: payload.currentUser,
      };
    case UserType.USER_UPDATE_AVATAR:
      return {
        ...state,
        currentUser: {
          username: currentUser.username,
          password: currentUser.password,
          avatar: payload.avatar,
          email: currentUser.email,
          birthDate: currentUser.birthDate,
          gender: currentUser.gender,
        },
      };
    case UserType.USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
