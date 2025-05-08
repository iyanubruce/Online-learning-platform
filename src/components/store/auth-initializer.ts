import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./authSlice";
import { RootState } from "./store";

const AuthInitializer = () => {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(fetchCurrentUser() as any);
    }
  }, [token, isAuthenticated, dispatch]);
  return null;
};

export default AuthInitializer;
