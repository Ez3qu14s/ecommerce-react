import React from 'react';
import { FaSearch } from 'react-icons/fa';
// import './style.css';
const Header = () => {
  return (
    <header className="flex flex-wrap justify-center w-[100%] bg-[#0369A1]">
      <div className="md:flex md:justify-between py-5 w-[80%] ">
        <h1 className="font-bold text-2xl text-[#F0F9FF]">FStore</h1>

        <div className="input-wrapper flex mt-6 md:mt-0">
          <input
            className="w-full input px-4 py-2 w-72 rounded mr-2"
            type="text"
            placeholder="Buscar um produto"
          />
          <button className="flex gap-2 rounded bg-white px-5 py-2 font-medium">
            <p className="text-button">Buscar</p>
            <FaSearch className="self-center" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
