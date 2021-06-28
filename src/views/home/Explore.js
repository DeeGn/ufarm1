import React from "react";
import { Card } from "react-bootstrap";

import GoogleMap from "../../components/GoogleMap";
import SelectFarm from "./SelectFarm";
import {AppLayout} from '../../components/layouts/AppLayout'

export default function Explore() {
  
  return (
    <AppLayout>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-6">The Farms</h2>
          <GoogleMap />
        </Card.Body>
      </Card>
      <div className="text-center mb-4"></div>
      <Card>
        <Card.Body>
          <div className="text-center mb-4">
            {" "}
            <SelectFarm />
          </div>
        </Card.Body>
      </Card>
      <div className="mt-4"></div>
      
      
      <div>
      <div className="mb-5"></div>
      </div>
    </AppLayout>
  );
}
