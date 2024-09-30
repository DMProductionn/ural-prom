import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/Home';
import Catalog from '../../pages/Catalog';
import News from '../../pages/News';
import Product from '../../pages/Product';

function App() {
  
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/product/:productId' element={<Product />} />
            <Route path='/news/:newsId' element={<News />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
