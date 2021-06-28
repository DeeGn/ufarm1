import React from "react";
import { Card } from "react-bootstrap";
import Button from "../../../components/Button";


import VegSlider1 from "../../cart/VegSlider1";
import VegSlider2 from "../../cart/VegSlider2";
import VegSlider3 from "../../cart/VegSlider3";
import {AppLayout} from '../../../components/layouts/AppLayout'

export default function MicroGreensFarm() {
  // const vegetable = useFirebaseVegetable("veg1");
  // const imageUrl = useFirebaseImage(vegetable.image);


  return (
    <AppLayout>
      <div>
      <Card style={{ width: "center 18rem" }}>
        <Card.Img variant="top" src="microgreensfarm1.jpg" />
        <Card.Body>
          <h1 className="text-center">Mr. Microgreens Farm Vegetable Section</h1>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <div>
        <VegSlider1 />
      </div>
      <div>
        <VegSlider2 />
      </div>
      <div>
        <VegSlider3 />
      </div>
      <div className="text-center">
        <Button to="/cart">Order Your Plot</Button>
      </div>
    </div>
    </AppLayout>
      );
    }