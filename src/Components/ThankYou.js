import React from 'react';
import styled from './css/thankyou.module.css';
import { Link } from 'react-router-dom';


export const ThankYou = () => {
  return (
   
      <div className={styled.tbody}>
        <div className={styled.Tbody}>
          <h1 className={styled.Tname}>Thank You For Shopping</h1>
        </div>
        <Link to="/"><button className={styled.CHobtn}>Return To Shopping</button></Link>
      </div>
    
  );
};
