import styled from "./css/shoppingcart.module.css";
import rubyslipper from "../images/GoldenToilet.jpg"
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';

function ShoppingCart() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8081/cart/all").then((Response)=> Response.json()).then((result)=> setData(result));
    },[]);

    const removeItem=(item)=>{
        setData((prev)=> prev.filter(prev_item => prev_item.id !== item.id))
    }
    return (
        <div className={styled.cartarea}>
            <div className={styled.cart}>
                <div className={styled.Cheading}>
                    <h3 className={styled}>Shopping Cart</h3>
                    {/* <h5 className={styled.Cremove} >Remove all</h5> */}
                </div>
                {data.length !== 0 ? data.map((item)=>{
                    return <CartItem item={item} removeItem={removeItem}/>
                }):null}
                <Link to="/thankyou"><button className={styled.CHobtn} >Check Out</button></Link>
             <Link to="/">   <button className={styled.CHobtn} >Continue To Shopping</button></Link>
            </div>
        </div>
    );
}
export default ShoppingCart