import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
// import FlipMove from 'react-flip-move';

function Checkout() {
    const[{basket, user}, dispatch] = useStateValue();

    const itemNotVisible = {
        transform: "translateX(-100%)",
        opacity: 0.1
    }

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/corp_events/otc21/traffic/home_otc21_desktopstripeB_1500x72.jpg" alt=""/>

                <div>
                    <h3>
                        Hey {user?.email}!
                    </h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                        {basket.map((item) => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
