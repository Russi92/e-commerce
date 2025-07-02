// import React, { useEffect, useState } from "react";
// import {BrowserRouter , Routes , Route} from "react-router-dom";
// import "./App.css"
// import Header from "./component/Header";
// import Home from "./component/Home";
// import Cart from "./component/Cart";
// import Contact from "./component/Contact";
// import productList from "./component/data";





// const App = () => {

//   const [productId , setProductId] = useState('');

//   const [cartAllProduct , setCartAllProduct] = useState([]);

//   useEffect(() => {
//     const filteredObject = productList.filter((product) => product.id == productId);
//     setCartAllProduct([...cartAllProduct , ...filteredObject])
//   },[productId]);
  
  

//   return(
//     <>

//       <BrowserRouter>
//       <Header cartAllProduct={cartAllProduct}/>
//         <Routes>
//           <Route path="/" element={<Home setProductId={setProductId}/>}></Route>
//           <Route path="/cart" element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//         </Routes>
//       </BrowserRouter>

//     </>
//   )
// } 

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from 'react-modal';
Modal.setAppElement('#root');
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import productList from "./component/data";

const App = () => {
  const [cartAllProduct, setCartAllProduct] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartAllProduct));
  }, [cartAllProduct]);

  const addToCart = (id) => {
    const exists = cartAllProduct.find((item) => item.id === id);
    if (!exists) {
      const product = productList.find((item) => item.id === id);
      setCartAllProduct((prev) => [...prev, { ...product, count: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Header cartAllProduct={cartAllProduct} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              cartAllProduct={cartAllProduct}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartAllProduct={cartAllProduct}
              setCartAllProduct={setCartAllProduct}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
