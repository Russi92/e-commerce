
// import React from "react";
// import toast, { Toaster } from 'react-hot-toast';




// const Cart = ({cartAllProduct , setCartAllProduct}) => {

//     // console.log("cartAllProduct", cartAllProduct);



//     const handleIncrease = (id) => {
//         setCartAllProduct((prevCart) => 
//         prevCart.map((item)=> item.id === id ? {...item , count:item.count + 1} : item))
//     }

//     const handleDecrease = (id) => {
//         setCartAllProduct((prevCart) => 
//         prevCart.map((item)=> item.id === id && item.count > 1 ? {...item , count:item.count - 1} : item))
//     }



//     const handleDeleteItem = (id) => {
//         const filtered = cartAllProduct.filter((item) => item.id !== id);
//         setCartAllProduct(filtered);
    
//         // ✅ تحديث localStorage لحالة الزر
//         const saved = JSON.parse(localStorage.getItem("disabledButtons") || "{}");
//         delete saved[id];
//         localStorage.setItem("disabledButtons", JSON.stringify(saved));
    
//         toast(
//           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <i className="fa-solid fa-trash text-danger"></i>
//             <span>Product removed from cart</span>
//           </div>,
//           { icon: false }
//         );
//       };


//     return(
//         <div className="container-fluid mt-5">
//             <div className="row p-3 ">

//             <Toaster />

//                 {
//                     cartAllProduct.map((product) => {
//                         return(
//                             <div className="col-6 border rounded d-flex gap-3" key={product.id}>
//                     <div className="p-2">
//                         <img src={product.img} alt="" className="card-product-size"/>
//                     </div>
//                     <div className="p-2 d-flex gap-3">
//                         <div>
//                         <h3 className="text-hiding m-0">{product.model.toUpperCase()}</h3>
//                         <div className="m-0 fw-normal fs-5">Price: {product.price} <i className="fa-solid fa-sterling-sign"></i></div>
//                         <div className="m-0 fw-normal fs-5">{product.space}</div>
//                         <div className="m-0 fw-normal fs-5">{product.camera}</div>
//                         <div className="d-flex gap-3 mt-1">
//                             <div className="m-0 border px-2 py-1 rounded pointer btn btn-primary" onClick={() => handleDecrease(product.id)}>-</div>
//                             <div className="m-0">{product.count}</div>
//                             <div className="m-0 border px-2 py-1 rounded pointer btn btn-primary" onClick={() => handleIncrease (product.id)}>+</div>
//                         </div>
//                         </div>

//                         <div className="d-flex">
//                             <p>{product.description}</p>
//                             <p onClick={() => handleDeleteItem (product.id)} className="pointer"><i className="fa-solid fa-trash text-danger"></i></p>
//                         </div>
//                     </div>
//             </div>
//                         )
//                     })}

//                 {cartAllProduct.length == 0 &&

//                 <div className="col-12 bg-primary rounded" style={{background : "#fff", boxShadow :"0 5px 10px #0d6efd" , width : "fit-content" ,
//                 margin : "auto"}}>
//                 <h1 className="text-center fs-3 text-white">No Products Available in Cart <i className="fa-solid fa-basket-shopping"></i></h1>
//                 </div>
//                 }
                
//             </div>
//         </div>
//     )
// }

// export default Cart;




import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIncrease = (id) => {
    setCartAllProduct((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartAllProduct((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    const filtered = cartAllProduct.filter((item) => item.id !== id);
    setCartAllProduct(filtered);
    toast(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <i className="fa-solid fa-trash text-danger"></i>
        <span>Product removed from cart</span>
      </div>,
      { icon: false }
    );
  };

  return (
    <div className="container mt-5">
      <Toaster />
      <div className="row p-3">

        {cartAllProduct.length === 0 ? (
          // <div className="col-12 bg-primary rounded" style={{ background: "#fff", boxShadow: "0 5px 10px #0d6efd", width: "fit-content", margin: "auto" }}>
          //   <h1 className="text-center fs-3 text-white">
          //     No Products Available in Cart <i className="fa-solid fa-basket-shopping"></i>
          //   </h1>
          // </div>
          <div className="col-12 bg-primary rounded p-3 w-100 text-center">
  <h1 className="fs-5 text-white m-0">
    No Products Available in Cart <i className="fa-solid fa-basket-shopping"></i>
  </h1>
</div>
        ) : (
          <>
            {cartAllProduct.map((product) => (
              <div key={product.id} className="col-12 col-md-6 border p-3 mb-3 rounded d-flex flex-column flex-md-row gap-4">
                {/* Product Image */}
                <div className="flex-shrink-0 text-center">
                  <img className="card-product-size img-fluid" src={product.img} alt="" />
                </div>

                {/* Product Details */}
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                    <h4 className="text-hiding m-0">{product.brand}</h4>
                    <h6 className="text-hiding m-0">{product.model.toUpperCase()}</h6>
                  </div>

                  <p className="m-0">
                    Total: {product.price * product.count} <i className="fa-solid fa-sterling-sign"></i>
                  </p>

                  <div className="m-0 fw-normal font-size-12">{product.space}</div>
                  <div className="m-0 fw-normal font-size-12">{product.camera}</div>

                  <div className="d-flex gap-2 align-items-center my-2">
                    <button className="btn btn-sm btn-primary" onClick={() => handleDecrease(product.id)}>-</button>
                    <span>{product.count}</span>
                    <button className="btn btn-sm btn-primary" onClick={() => handleIncrease(product.id)}>+</button>
                  </div>

                  <p className="text-muted">{product.description}</p>
                  <p onClick={() => handleDelete(product.id)} className="text-danger pointer">
                    <i className="fa-solid fa-trash fs-5"></i>
                  </p>
                </div>
              </div>
            ))}

            {/* Buy Now Button */}
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                Buy Now
              </button>
            </div>
          </>
        )}

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Order Form"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(6px)",
            },
            content: {
              width: "100%",
              maxWidth: "500px",
              margin: "auto",
              borderRadius: "10px",
              padding: "30px",
              height: "fit-content",
            },
          }}
        >
          <h3 className="mb-3">📝 Complete Your Order</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Your order has been submitted ✅");
              setIsModalOpen(false);
              setCartAllProduct([]); // ✅ تفريغ السلة بعد الطلب (اختياري)
            }}
          >
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea className="form-control" rows="3" required style={{ resize: "none" }}></textarea>
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </form>
        </Modal>

      </div>
    </div>
  );
};

export default Cart;
