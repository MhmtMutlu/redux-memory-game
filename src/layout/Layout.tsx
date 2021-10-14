import React from "react";
import { LayoutContainer } from "./styles";

const Layout: React.FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
