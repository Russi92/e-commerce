import React from "react";
import { NavLink } from "react-router-dom";


const Header = ({cartAllProduct}) => {
    return(
  

            <div className="container-fluid navbar-fixed">

                <div className="row">

                    <div className="col-12 bg-primary d-flex justify-content-between px-5">

                        <ul className="d-flex gap-5 align-items-center m-0 py-3 p-0">

                            <NavLink to="/" className="list-unstyled text-light p-0 pointer text-decoration-none">Home</NavLink>
                            <li className="list-unstyled text-light p-0 pointer">About</li>
                            <NavLink to="/contact" ><li className="list-unstyled text-light p-0 pointer">Contact Us</li></NavLink>
                            <li className="list-unstyled text-light p-0 pointer">Help</li>
                           

                        </ul>

                        

                        <ul className="m-0 py-3 p-0 position-relative">
                        <NavLink to="/cart" className="list-unstyled text-light p-0 pointer text-decoration-none">
                            <i className="fa-solid fa-cart-shopping fs-5"></i>
                            <span className="count rounded-pill font-size-12 position-absolute count-number text-white" style={{background : "red"}}>
                            {cartAllProduct.length}
                            </span>
                        </NavLink>


                        </ul>

                      

                    </div>

                </div>

            </div>

    
    )
}

export default Header;