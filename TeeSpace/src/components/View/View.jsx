//import React from 'react'

import './View.css'
import { useEffect, useState } from "react";
import axios from 'axios';

const View = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing');
          console.log(response);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);


  

  return (
    <div>
        <h2>List of tees</h2>
        <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default View;



