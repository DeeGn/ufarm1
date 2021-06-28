import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AppLayout} from '../../components/layouts/AppLayout'

export default function SelectFarm () {
    return (
      <AppLayout>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img variant="top" src="farmfarang1.png" />
          <Card.Body>
            <Card.Title>Farm Farang</Card.Title>
            <Card.Text>
              Description of Farm Farang will go here along with any other
              details needed.
            </Card.Text>
            <Link to="/farmfarang">
              <Button
                className="w-100 mt-3"
                type="submit"
                variant="default"
                style={{ color: "white", background: "#64931b" }}
              >
                Go To Farm Farang
              </Button>
            </Link>{" "}
            {""}
          </Card.Body>
        </Card>
        <div className="mt-4"></div>
        <Card className="d-flex align-items-center justify-content-center">
          <Card.Img variant="top" src="microgreensfarm1.jpg" />
          <Card.Body>
            <Card.Title>Mr. Microgreens Farm</Card.Title>
            <Card.Text>
              COMING SOON! Description and details of the indoor microgreens
              farm.
            </Card.Text>
            <Link to="/mrmicrogreensfarm">
              <Button
                className="w-100 mt-3"
                type="submit"
                variant="default"
                style={{ color: "white", background: "#64931b" }}
              >
                Go To Mr. Microgreens Farm
              </Button>
            </Link>{" "}
            {""}
          </Card.Body>
        </Card>
      </AppLayout>
    );
  }
