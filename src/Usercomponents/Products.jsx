import React, { use, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import products from './products.json';
function Products() {


  return (
    <div className='container mt-5 d-flex flex-wrap gap-3 justify-content-center'>
      {
        products.map((product) => (
          // <div className="card" key={product.id}>

          //   <h2>ID : {product.id}</h2>
          //   <h3>Title : {product.name}</h3>
          //   <p>Name : {product.name}</p>

          // </div>
          <Card  style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">REEl</Button>
      </Card.Body>
    </Card>
        ))}
      
    </div>
  )
}

export default Products

{/* {
        products.map((product) => {

          return <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.thumbnail} alt={product.title} />
            <Card className='card' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>



        }
        )};

 */}