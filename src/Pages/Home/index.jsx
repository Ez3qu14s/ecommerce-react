import React from 'react';
import Card from './Components/Card';
import api from './api';

const Home = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    api().then((item) => {
      setProdutos(item);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-medium mb-4">Produtos</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {produtos.map((produto) => (
          <Card data={produto} />
        ))}
      </div>
    </div>
  );
};

export default Home;
