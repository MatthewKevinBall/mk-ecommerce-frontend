export interface IUser {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string;
  phoneNumber: string | null;
}

export const defaultUser: IUser = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};
