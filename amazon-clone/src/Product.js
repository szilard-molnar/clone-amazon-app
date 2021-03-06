import React from 'react';
import { useStateValue } from './StateProvider';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch data to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>&#11088;</p> //Render stars
                    ))}
                </div>
            </div>
            <img 
                className=""
                src={image}
                alt=""
            />

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
