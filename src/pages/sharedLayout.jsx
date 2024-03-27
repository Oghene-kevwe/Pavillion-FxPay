import { Outlet, useLocation } from "react-router";
// import { ScrollToTopOnPageChange } from "../components/scrollToTop";
import { useEffect, useState } from "react";

export const SharedLayout = () => {
  return (
    <div>
      {/* <ScrollToTopOnPageChange /> */}
      <Outlet />
    </div>
  );
};
