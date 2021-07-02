import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>&#11088;</p> {/* Render Star */}
                    <p>&#11088;</p>
                    <p>&#11088;</p>
                </div>
            </div>
            <img 
                className=""
                src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                alt=""
            />

            <button>Add to basket</button>
        </div>
    )
}

export default Product
