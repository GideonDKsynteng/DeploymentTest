import React, { lazy, useEffect, useState, Suspense } from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Progress from "../component/Progress";
import Header from "./../component/Header";
import { createBrowserHistory } from "history";

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
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => {
              setIsSignedIn(false);
            }}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth/signin">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>

              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
