// // import React from "react";
// import productList from "./data";
// import toast, { Toaster } from 'react-hot-toast';
// import { useState , useEffect } from "react";




// const Home = ({setProductId}) => {

//     const [disabledButtons, setDisabledButtons] = useState({});

//     useEffect(() => {

//         const saved = localStorage.getItem("disabledButtons");
//         if (saved) {
//           setDisabledButtons(JSON.parse(saved));
//         }
//       }, []);

//       const handleAddToCart = (id) => {
//         if (disabledButtons[id]) return;
    
//         const updated = { ...disabledButtons, [id]: true };
//         setDisabledButtons(updated);
//         localStorage.setItem("disabledButtons", JSON.stringify(updated));
    
//         setProductId(id);
//         toast.success("Product added to cart successfully");
//       };

      

//     return(
//             <div className="container-fluid px-5 mt-5">
//                 <div className="row gap-4 justify-content-center">

//                     <Toaster />

//                     {productList.map((product , index) => {
//                         return(
//                             <div key={product.id} className="col-2 border rounded mt-3 gap-3">
//                         <div className="d-flex justify-content-center p-2">
//                             <img src={product.img} alt="" className="product-size"/>
//                         </div>
//                         <div>
//                         <div className="d-flex justify-content-between px-2">
//                             <div className="m-0 fw-bold">{product.brand}</div>
//                             <div className="m-0 fw-bold">{product.model}</div>
//                         </div>
//                             <div className="d-flex justify-content-between px-2">
//                                 <div className="m-0 font-size-12">Price: {product.price} <i className="fa-solid fa-sterling-sign"></i></div>
//                                 <div className="m-0 text-hiding font-size-12">{product.space}</div>
//                             </div>

//                             <div className="px-2 mt-1 mb-2">
//                                 <button disabled={disabledButtons[product.id]} className="btn btn-primary w-100" onClick={() =>handleAddToCart(product.id)}>Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                         )
//                     })}

                    
//                 </div>
//             </div>

        
//     )
// }

// export default Home;


import productList from "./data";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ addToCart, cartAllProduct }) => {
  return (
    <div className="container-fluid px-5 mt-5">
      <Toaster />
      <div className="row gap-4 justify-content-center">
        {productList.map((product) => {
          const isInCart = cartAllProduct.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="col-2 border rounded mt-3">
              <div className="d-flex justify-content-center p-2">
                <img src={product.img} alt="" className="product-size" />
              </div>

              <div className="px-2 mt-1 mb-2">

                <div className="d-flex justify-content-around align-items-center px-2">

                <h5>{product.brand}</h5>
                <h6>{product.model}</h6>

                </div>

                {/* <p className="px-2">Price : {product.price} <i className="fa-solid fa-sterling-sign"></i></p> */}
                <div className="d-flex justify-content-between px-2 align-items-center">

                    <div className="m-0 font-size-12">Price: {product.price} <i className="fa-solid fa-sterling-sign"></i></div>
                    <div className="m-0 text-hiding font-size-12">{product.space}</div>

                </div>
                
                <button
                  className="btn btn-primary w-100"
                  disabled={isInCart}
                  onClick={() => {
                    addToCart(product.id);
                    toast.success("Product added to cart successfully");
                  }}
                >
                  Add To Cart
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

