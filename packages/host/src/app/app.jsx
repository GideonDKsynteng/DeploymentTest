import React, { useEffect, useState } from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./../component/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {});

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => {
              setIsSignedIn(false);
            }}
            isSignedIn={isSignedIn}
          />
          <Routes>
            <Route path="/auth">
              {/* <AuthLazy onSignIn={() => setIsSignedIn(true)} /> */}
            </Route>
            <Route path="/dashboard">
              {/* {!isSignedIn && <Redirect to="/" />}
            <DashboardLazy /> */}
            </Route>
            {/* <Route path="/" element={} /> */}
          </Routes>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
