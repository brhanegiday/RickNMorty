import React from "react";
import Header from "./Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "85vh" }}>{children}</main>
    </>
  );
}

export default Layout;
