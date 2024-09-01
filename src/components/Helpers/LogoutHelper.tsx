import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

/**
 * Add this component to ridrect to homepage on
 * logout
 * @returns null
 */
const LogoutHelper: React.FC = () => {
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
        navigate("/");
    }
  }, [loggedIn, history]);

  return null; // This component doesn't need to render anything
};

export default LogoutHelper;