import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
  return (
    <div>
      {/* <StylesProvider generateClassName={generateClassName}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      {/* </StylesProvider> */}
    </div>
  );
};
