/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

// mount function to start up the app
const mount = (el, pathname) => {
  console.log("pathname feom landing bootstrap");
  ReactDOM.render(
    <BrowserRouter>
      <App pathname={pathname} />
    </BrowserRouter>,
    el
  );
};

//if we are in development an in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, "/");
  }
}

//we are running through container
// and we should export the mount function
export { mount };
