/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// mount function to start up the app
const mount = (el, { onSignIn }) => {
  ReactDOM.render(<App onSignIn={onSignIn} />, el);
};

//if we are in development an in isolation
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { onSignIn: () => console.log("click") });
  }
}

//we are running through container
// and we should export the mount function
export { mount };
