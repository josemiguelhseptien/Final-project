import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { LandingPage } from "./landingPage";
import "devextreme/dist/css/dx.light.css";

export const App = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <LandingPage />
    </>
  );
};
