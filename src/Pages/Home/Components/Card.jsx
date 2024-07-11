import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div className="flex flex-col place-content-between grow w-[240px]">
      <img
        className="h-[200px] w-[100%] object-contain"
        src={data.image}
        alt=""
      />
      <div className="p-4">
        <h1 className="text-lg font-medium">{data.title}</h1>
        <span className="block text-xs text-[#515151]">{data.category}</span>
        <h2 className="text-xl font-medium mt-2">R$ {data.price}</h2>
      </div>
      <Link to={`/produto/${data.id}`}>
        <button className="bg-[#0369A1] p-2 w-[100%] text-white justify-seld-end">
          Comprar
        </button>
      </Link>
    </div>
  );
};

export default Card;
