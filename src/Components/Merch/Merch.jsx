import React from 'react';
import "./Merch.css";
import product from '../../assets/products/data';


const Merch = () => {

  const phoneNumber = "+254701592565";
  const message = "Hey, Iam interested in purchasing your merch";

  const Whatsapp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='header-container'>
        <h1 className='header'>Shop Our Merch</h1>
        <div className='product-list'>
          {product.map((product)=> (
            <div key={product.id} className='product'>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={Whatsapp}>Contact</button>
            </div>
          ))}
        </div>
    </div>
  )
};

export default Merch;