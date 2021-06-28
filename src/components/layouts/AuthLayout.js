import React from "react";

export function AuthLayout({ to, children, ...props}) {
  return (
    <div className="auth-layout">
        {children}
    </div>
  );
}
