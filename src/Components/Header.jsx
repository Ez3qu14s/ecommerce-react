import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center w-[100%] bg-[#0369A1]">
      <div className="flex justify-between py-5 w-[80%] ">
        <h1 className="font-bold text-2xl text-[#F0F9FF]">FStore</h1>

        <div className="">
          <input
            className="px-4 py-2 w-72 rounded mr-2"
            type="text"
            placeholder="Buscar um produto"
          />
          <button className="rounded bg-white px-5 py-2 font-medium">
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
