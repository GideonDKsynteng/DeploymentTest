import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default ({ pathname }) => {
  const ref = useRef(null);
  console.log("pathname", pathname);

  useEffect(() => {
    mount(ref.current, pathname);
  }, [pathname]);

  return <div ref={ref} />;
};
