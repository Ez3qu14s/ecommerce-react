import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="py-5 w-[75%]">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produto/:id" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
