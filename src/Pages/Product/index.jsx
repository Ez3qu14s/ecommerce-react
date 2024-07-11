import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api';

const Product = () => {
  const [produto, setProdutos] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    api().then((item) => {
      setProdutos(item[Number(id) - 1]);
    });
  }, []);

  console.log(produto);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default Product;
