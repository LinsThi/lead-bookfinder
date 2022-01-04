import type { Action } from 'redux';

export enum UserType {
  USER_LOGIN = '@user/USER_LOGIN',
  USER_LOGOUT = '@user/USER_LOGOUT',
  USER_UPDATE_AVATAR = '@user/USER_UPDATE_AVATAR',
  USER_UPDATE = '@user/USER_UPDATE',
}

export interface UserProps {
  username: string;
  password: string;
  avatar: string;
  email: string;
}

export interface UserState {
  currentUser: UserProps;
  isLogged: boolean;
}

export interface LoginActionProps extends Action {
  type: UserType.USER_LOGIN;
  payload: {
    username: string;
    password: string;
  };
}

export interface LogoutActionProps extends Action {
  type: UserType.USER_LOGOUT;
}
