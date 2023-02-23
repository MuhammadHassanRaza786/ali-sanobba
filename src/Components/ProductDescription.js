import React, { useEffect, useState } from 'react';
import styles from './css/pDescription.module.css';
import styled from './css/header.module.css';
// import Dwatch from '../images/DiamondWatch.jpg';
import { useNavigate, useParams } from 'react-router-dom';

function ProductDescription() {
  const nav = useNavigate();
  const param = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  //   const pricePerItem = (4,413,104,582);
  ;
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const data  ={
      image:item.productImg,
      name:item.productName,
      quantity:quantity,
      price:item.productPrice,
      totalprice:item.productPrice*quantity
    }
    fetch(
      "http://localhost:8081/cart/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      {
        mode: "cors",
      }
      )
      .then(()=>{
        nav('/cart');
      });
    };

    

  useEffect(() => {
    fetch("http://localhost:8080/Product/list/" + param.id).then((Response) => Response.json()).then((result) => setItem(result));
  }, [param.id]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img className={styles.image} src={item.productImg} />
        </div>
        <div className={styles.text}>
          <h3 className={styles.Ptitle}>{item.productName}</h3>
          <p>
            {item.longDescription}
          </p>
        </div>
        <div className={styles.price}>
          <span>Price/ Rs:{item.productPrice}</span>
        </div>
        <div className={styles.cartbtn}>
          <button className={styles.paddtocart} onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className={styles.quantity}>
      
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={10}
          />

        </div>
      </div>
    </>
  );
}
export default ProductDescription;
