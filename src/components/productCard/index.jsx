import React from 'react'
import './styles.css'

export default function ProductCard() {
  return (
    <div className="product-cart">
      <img src="src\assets\WellnessLogo.png" alt="product image" />
      <span>SHOP</span>
      <h4>PRODUCT SHOP</h4>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <span><span className="specific">4.5 </span>(630)</span>
      </div>
      <h4 className="price">EGP 260</h4>
      <a href="#"><i className="fa-solid fa-cart-shopping buy-icon"></i></a>
    </div>
  )
}
