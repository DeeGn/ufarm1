import React from "react";
import { Card } from "react-bootstrap";
import { UpdateProfileCallout } from "../../components/UpdateProfileCallout";
import {AppLayout} from '../../components/layouts/AppLayout'

export default function Settings () {
    return (
      <AppLayout>
      <div>
        <h1 className="text-center">Settings</h1>
        <Card>
          <Card.Body>
            <h2 className="text-center mt-2 mb-3">Your Profile</h2>
            <h3 className="text-center mb-2">FAQs</h3>
            <UpdateProfileCallout />
          </Card.Body>
        </Card>
      </div>
      </AppLayout>
    );
  }

