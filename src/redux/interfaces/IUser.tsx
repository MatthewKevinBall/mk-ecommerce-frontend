export interface IUser {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string;
  phoneNumber: string | null;
  userType : string
}

export const defaultUser: IUser = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  userType : 'User'
};
