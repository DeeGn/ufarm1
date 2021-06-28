import React from "react";
import { Card } from "react-bootstrap";
import { useFirebaseImage } from "../../../hooks/useFirebaseImage";
import Button from "../../../components/Button";
import { db } from "../../../firebase";

import VegSlider1 from "../../cart/VegSlider1";
import VegSlider2 from "../../cart/VegSlider2";
import VegSlider3 from "../../cart/VegSlider3";
import {AppLayout} from '../../../components/layouts/AppLayout'

export default function FarmFarang() {
  // const vegetable = useFirebaseVegetable("veg1");
  // const imageUrl = useFirebaseImage(vegetable.image);

  const imageUrl = useFirebaseImage(
    "gs://ufarm1-81a84.appspot.com/Farm-Farang-Logo-511x511-1.jpeg"
  );

  function addDocument() {
    console.log("click");
    // Add a new document in collection "locations"
    db.collection("vegetables")
      .doc("Tomato")
      .set({
        name: "Tomato",
        image: "blabla",
        
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  return (
    <AppLayout>
    <div className="mt-4 mb-2">
      <img src={imageUrl} alt="" />
      <Button onClick={addDocument}>Add To Collection</Button>

      <Card style={{ width: "center 18rem" }}>
        <Card.Img variant="top" src="farmfaranglogo1.jpeg" />
        <Card.Body>
          <h1 className="text-center">Farm Farang Vegetable Section</h1>
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
