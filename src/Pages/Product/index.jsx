import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default Product;