/* eslint-disable react/jsx-filename-extension */
// @ts-nocheck
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma"
});

export default ({ pathname }) => {
  console.log("pathname from landing", pathname);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(pathname);
  }, [pathname]);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Routes>
          <Route exact path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </StylesProvider>
    </div>
  );
};
