"use client";
import { ReactNode } from "react";
import { persistor, store } from "../../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
interface LayoutProps {
  children: ReactNode;
}

const SessionProv = ({ children }: LayoutProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default SessionProv;
