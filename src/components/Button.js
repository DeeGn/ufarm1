import React from "react";

import { Link } from "react-router-dom";

export default function Button({ to, children, ...props}) {
  return (
    <Link
      to={to}
      className="btn btn-primary w-90 mt-5 mb-5"
      type="submit"
      style={{ color: "white", background: "#64931b" }}
      variant="primary"
      {...props}
    >
      {children}
    </Link>
  );
}
