"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ReactNode } from "react";
import AuthInitializer from "../store/auth-initializer";
interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      <AuthInitializer />
      {children}
    </Provider>
  );
};

export default ReduxProvider;
