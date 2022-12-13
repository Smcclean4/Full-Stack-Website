import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Cartitems from "../components/Cartitems";
import "../stylesheets/Cart.css";

let cartStorage = JSON.parse(localStorage.getItem('cartInfoStorage') || '[]')

const Cart = () => {
  const [cartInfo, setCartInfo]: any = useState(cartStorage)

  const location: any = useLocation()

  useEffect(() => {
    const cartData = location.state?.data
    setCartInfo(cartData)
    console.log('effect triggered!')
  }, [])

  useEffect(() => {
    localStorage.setItem('cartInfoStorage', JSON.stringify(cartInfo))
    console.log('data stored.')
  }, [cartInfo])

  const addItem = (ID: any) => {
    setCartInfo([...cartInfo.slice(0, ID), { ...cartInfo[ID], price: cartInfo[ID].price + cartInfo[ID].price, quantity: cartInfo[ID].quantity + 1 }, ...cartInfo.slice(ID + 1)])
    console.log(cartInfo)
    console.log(cartInfo[ID].quantity)
    console.log('incremented item!!')
  }

  const removeItem = (ID: any) => {
    if (cartInfo[ID].quantity !== 1) {
      setCartInfo([...cartInfo.slice(0, ID), { ...cartInfo[ID], price: cartInfo[ID].price - cartInfo[ID].price, quantity: cartInfo[ID].quantity - 1 }, ...cartInfo.slice(ID + 1)])
      console.log(cartInfo)
      console.log('decremented item!!')
    }
  }

  return (
    <>
      <div className="cart-background">
        <div className="checkout-section">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgb(162, 6, 6)",
              },
              margin: "20px",

            }}>
            <Link className="checkout-link" to="/Checkout" state={{ data: cartInfo }}>
              Proceed To Checkout
            </Link>
          </Button>
        </div>
        <p className="cart-header">Cart</p>
        <div className="cart-window">
          {cartInfo?.length !== 0 ? <Cartitems items={cartInfo} additem={addItem} removeitem={removeItem} /> :
            <>
              <h1>YOUR CART IS EMPTY!</h1>
              <br></br>
              <br></br>
              <h1>PLEASE RETURN WHEN YOUVE CHECKED OUT THE STORE AND PURCHASED SOME ITEMS</h1>
              <br></br>
              <br></br>
              <h1>😜</h1>
            </>}
        </div>
        <div className="return-section">
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgb(162, 6, 6)",
              },
              marginTop: "20px",
            }}
          >
            <Link className="return-link" to="/Home">
              Return to home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
