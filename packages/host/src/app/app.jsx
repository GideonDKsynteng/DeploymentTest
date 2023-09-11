import React, { lazy, useEffect, useState, Suspense } from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router, Route, Routes, Navigate } from "react-router-dom";
import Progress from "../component/Progress";
import Header from "./../component/Header";
import { createBrowserHistory } from "history";
import CustomRouter from "component/CustomRouter/CustomRouter";

const MarketingLazy = lazy(() => import("../pages/landing/index"));
const AuthLazy = lazy(() => import("../pages/auth/index"));
const DashboardLazy = lazy(() => import("../pages/dashboard/index"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = createBrowserHistory();
  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router navigator={history} location={history.location} basename="/">
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => {
              setIsSignedIn(false);
            }}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Routes>
              <Route
                path="/auth/signin"
                element={
                  <AuthLazy
                    history={history}
                    onSignIn={() => setIsSignedIn(true)}
                  />
                }
              />
              <Route
                path="/dashboard"
                element={!isSignedIn ? <Navigate to="/" /> : <DashboardLazy />}
              />

              <Route path="/" element={<MarketingLazy />} />
            </Routes>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
