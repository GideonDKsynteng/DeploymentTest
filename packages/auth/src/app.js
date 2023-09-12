import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/auth/signin/"
              element={<Signin onSignIn={onSignIn} />}
            />

            <Route
              path="/auth/signup/"
              element={<Signup onSignIn={onSignIn} />}
            />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
