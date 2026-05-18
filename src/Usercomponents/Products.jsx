import React, { use, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {

    let [products , setProducts] = React.useState([]);

    async function fetchproducts(){
        let data = await fetch ("https://dummyjson.com/products");

        let res = await data.json();

        setProducts(res.products);
    }
    useEffect(()=>{
        fetchproducts();
    },[]);

  return (
   <div className='container mt-5 d-flex flex-wrap gap-3 justify-content-center'> 

    {
        products.map((product)=>{
          
            return <div>
               {/* <h2>{product.title}</h2>
                <p>{product.description}</p> 
                <img src={product.thumbnail} alt={product.title} /> */}
                 <Card style={{ width: '18rem' }}>
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



   </div>

  )
}

export default Products