import styled from './css/product.module.css';
// import styles from './css/pDescription.module.css';
import Slipperimg from '../images/RubySlippers.jpg';
import pudding from '../images/ChocolatePudding.png';
import Dwatch from '../images/DiamondWatch.jpg';
import Gtoilet from '../images/GoldenToilet.jpg';
import Lymotor from '../images/LandYachtMotorHome.jpg'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Product({ items }) {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };
    // const { items } = props;
    const nav = useNavigate();
    const handleAddToCart = (x) => {

        const data = {
            image: x.productImg,
            name: x.productName,
            quantity: quantity,
            price: x.productPrice,
            totalprice: x.productPrice * quantity
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
            .then(() => {
                nav('/cart');
            });
    };

    return (
        <>
            <h3 className={styled.Pheading}>Product List</h3>
            <div className={styled.body}>
                <div className={styled.productcontainer}>
                    {/* <h3 className={styled.Pheading}>Shopping Cart</h3> */}
                    <div className={styled.header}>

                        {/* <h5 className={styled.Paction} >Remove All</h5> */}
                    </div>

                    {items &&
                        items.map((x) => {
                            return (

                                <div className={styled.Piteam}>
                                    <div className={styled.Pimage}>
                                        <img className={styled.slipperimg} src={x.productImg} ></img>
                                    </div>
                                    <div className={styled.Pabout}>
                                        <Link to={`/details/${x.id}`}>
                                            <h1 className={styled.Ptitle}>{x.productName}</h1>
                                        </Link>
                                        <h3 className={styled.Psubtitle}>{x.shortDescription}</h3>
                                    </div>
                                    {/* <div className={styled.Pcounter}></div> */}


                                    <div className={styled.quantity}>

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
                                        <div className={styled.Pprices}>
                                            <div className={styled.Pamount}>Rs. {x.productPrice}</div>
                                            <button className={styled.paddtocart} onClick={() => handleAddToCart(x)}>Add to Cart</button>
                                            {/* <div className={styled.Premove}></div> */}
                                        </div>
                                    </div>
                                </div>


                            )
                        })

                    }


                </div>

            </div>

        </>

    );
}
export default Product;