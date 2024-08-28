import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/loginActions';
import { clearUser } from '../../redux/actions/userActions';
import { IUser } from '../../redux/interfaces/IUser';

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
  };

  return handleLogout;
};

export const mapLoginResponseToUserData = (jsonResponse: string) => {
  const parsedObject = JSON.parse(jsonResponse);

  const user: IUser = {
    id: parsedObject.Id,
    firstName: parsedObject.FirstName,
    lastName: parsedObject.LastName,
    email: parsedObject.Email,
    phoneNumber: null,
  };

  return user;
};
