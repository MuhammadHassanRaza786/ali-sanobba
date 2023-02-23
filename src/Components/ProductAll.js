import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductAll({products}){
    const navigator = useNavigate();

    // const [OnchangeValue, setChangeValue]= useState(1);

    const changeValue = (event) =>{
        setChangeValue(event);
    };

    const handleAddToCart = (x) =>{
        // if(OnchangeValue > 0){
        //     const requestData ={
        //         name:x.name,
        //         image:x.image,
        //         quantity:changeValue,
        //         totalprice
        //     }
        // }
    }
}