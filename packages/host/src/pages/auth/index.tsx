import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default ({ onSignIn, history }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;
        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
      onSignIn,
    });

    // onParentNavigate();
  });

  return <div ref={ref} />;
};
