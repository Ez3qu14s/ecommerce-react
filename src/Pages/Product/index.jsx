import React from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../api';
import './style.css';

const Product = () => {
  const [produto, setProdutos] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    api().then((item) => {
      setProdutos(item[Number(id) - 1]);
    });
  }, []);

  return (
    <>
      <Link to="/">
        <h1 className="before:content-['<'] before:mr-2 text-lg font-semibold text-gray-400">
          Produtos
        </h1>
      </Link>

      {produto ? (
        <div className="grid gap-6 md:gap-16 lg:gap-32">
          <img
            className="md:w-[300px] lg:w-[340px] justify-self-center w-[200px]"
            src={produto.image}
            alt=""
          />
          <div className="content-center">
            <h1 className="text-xl font-semibold">{produto.title}</h1>
            <span className="text-[#6b7280] font-light">
              {produto.category}
            </span>
            <p className="my-4">{produto.description}</p>

            <p className="text-3xl font-semibold">R$ {produto.price}</p>
            <button className="mt-6 lg:w-[200px] w-full py-2 bg-[#0369A1] text-[#f0f9ff] font-medium">
              Comprar
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full mt-6">
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Product;
