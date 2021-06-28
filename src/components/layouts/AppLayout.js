import React from "react";
import  Navbar  from "../nav/NavBar";

export function AppLayout({ to, children, ...props}) {
  return (
    <div className="app-layout">
        {children}
        <Navbar />
    </div>
  );
}
