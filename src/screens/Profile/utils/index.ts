import { updateUserAction } from '~/store/ducks/user/action';
import type { UserProps } from '~/store/ducks/user/types';

export const updateUser = (store: any, currentUser: UserProps) => {
  store.dispatch(updateUserAction(currentUser));
};
