import React from "react";
import NavbarWithDrawer from "./NavbarWithDrawer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarWithDrawer />
      <div className="container mt-4">{children}</div>
    </div>
  );
};

export default Layout;
