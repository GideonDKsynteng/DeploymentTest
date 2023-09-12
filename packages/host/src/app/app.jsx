import React, { lazy, useEffect, useState, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Progress from "../component/Progress";
// import Marketing from "../pages/landing/index";
import Header from "./../component/Header";

const MarketingLazy = lazy(() => import("../pages/landing/index"));
// const AuthLazy = lazy(() => import("../pages/auth/index"));
// const DashboardLazy = lazy(() => import("../pages/dashboard/index"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      console.log("isSignedIn", isSignedIn);
    }
  }, [isSignedIn]);

  return (
    <BrowserRouter>
      {/* <StylesProvider generateClassName={generateClassName}> */}
      <Header
        onSignOut={() => {
          setIsSignedIn(false);
        }}
        isSignedIn={isSignedIn}
      />
      <Suspense fallback={<Progress />}>
        <Routes>
          {/* <Route
            path="/auth/signin"
            element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />}
          /> */}
          {/* <Route
            path="/dashboard"
            element={!isSignedIn ? <Navigate to="/" /> : <DashboardLazy />}
          /> */}
          <Route path="/" element={<MarketingLazy />} />
        </Routes>
      </Suspense>
      {/* </StylesProvider> */}
    </BrowserRouter>
  );
};
