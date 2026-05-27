import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import products from "./products.json";

import "./Products.css";

function Products() {

  return (

    <div className="products-container">

      {products.map((product) => (

        <Card
          key={product.id}
          className="product-card"
        >

          <Card.Img
            variant="top"
            src={product.image}
            className="product-image"
          />

          <Card.Body>

            <Card.Title className="product-title">
              {product.name}
            </Card.Title>

            <Card.Text className="product-text">
              {product.description}
            </Card.Text>

            <Button
              variant="dark"
              className="w-100"
            >
              REEL
            </Button>

          </Card.Body>

        </Card>

      ))}

    </div>
  );
}

export default Products;