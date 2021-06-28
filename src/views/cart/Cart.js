import React from "react";
import {AppLayout} from '../../components/layouts/AppLayout'


export default function Cart() {
  return (
    <AppLayout>
    <div>
      <h1
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        Your Cart
      </h1>
    </div>
    </AppLayout>
  );
}
