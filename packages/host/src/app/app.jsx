import React, { lazy, useEffect, useState, Suspense } from "react";
import { Navigate, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Header from "../component/Header";
import Progress from "../component/Progress";

const MarketingLazy = lazy(() => import("../pages/landing/index"));
const AuthLazy = lazy(() => import("../pages/auth/index"));
const DashboardLazy = lazy(() => import("../pages/dashboard/index"));

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isSignedIn) navigate("/dashboard");
  }, [isSignedIn]);

  useEffect(() => {
    console.log("location /////////", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header
        onSignOut={() => {
          setIsSignedIn(false);
        }}
        isSignedIn={isSignedIn}
      />
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path="/auth/signin" element={<AuthLazy onSignIn={() => setIsSignedIn(true)} />} />
          <Route path="/dashboard" element={!isSignedIn ? <Navigate to="/" /> : <DashboardLazy />} />
          <Route path="/" element={<MarketingLazy pathname={location.pathname} />} />
        </Routes>
      </Suspense>
    </>
  );
};
