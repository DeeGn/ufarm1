import React from "react";
import { Card } from "react-bootstrap";
import {Plots} from "../home/Plots";
import {AppLayout} from '../../components/layouts/AppLayout'

export default function YourFarm () {
  
    return (
      <AppLayout>
      <div>
        <h1 className="text-center">Your Farm</h1>
        <Card>
          <Card.Body>
            <h1 className="text-center mt-2 mb-3">Info: Farm Details</h1>
            <div>
              <Plots />
            </div>
            <h3 className="text-center mt-3">Start A New Plot </h3>
          </Card.Body>
        </Card>
      </div>
      </AppLayout>
    );
  }

