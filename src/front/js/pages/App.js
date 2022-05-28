import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { LandingPage } from "./landingPage";

export const App = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <LandingPage />
    </>
  );
};
