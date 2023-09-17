import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au"
});

// eslint-disable-next-line react/prop-types
export default ({ onSignIn }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter basename="auth">
        <Routes>
          <Route path="/signin" element={<Signin onSignIn={onSignIn} />} />

          <Route path="/signup" element={<Signup onSignIn={onSignIn} />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  </div>
);
