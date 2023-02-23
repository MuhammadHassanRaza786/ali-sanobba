
import Product from './Components/Product';
import Header from './Components/Header';
import ShoppingCart from './Components/ShoppingCart';
import ProductDescription from './Components/ProductDescription';

import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThankYou } from './Components/ThankYou';

function App() {
  const [Items, setItems] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/Product/list/all')
        const data = await response.json()
        console.log("hassan")
        console.log(data)
        setItems(data)
      }
      catch (e) {
        console.log('I see this error there boi!!!')
        console.log(e)
      }
    }
    fetchData()
  }, [])
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header></Header>}>
            <Route index element={<Product items={Items} ></Product>}></Route>
            <Route path='/details/:id' element={<ProductDescription></ProductDescription>} />
            <Route path='/cart' element={<ShoppingCart></ShoppingCart>} />
            <Route path='/thankyou' element={<ThankYou></ThankYou>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
