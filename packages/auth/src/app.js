// @ts-nocheck
import React from "react";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router navigator={history} location={history.location} basename="auth">
          <Routes>
            <Route path="/signin" element={<Signin onSignIn={onSignIn} />} />
            <Route path="/signup" element={<Signup onSignIn={onSignIn} />} />
          </Routes>
        </Router>
      </StylesProvider>
    </div>
  );
};
