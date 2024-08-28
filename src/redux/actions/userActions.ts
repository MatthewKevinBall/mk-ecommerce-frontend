import { IUser } from '../interfaces/IUser';

export const updateUser = (user: IUser) => ({
  type: 'UPDATE_USER' as const,
  payload: user,
});
export const clearUser = () => ({
  type: 'CLEAR_USER' as const,
});
export type UserActions = ReturnType<typeof updateUser | typeof clearUser>;
