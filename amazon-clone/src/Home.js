import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDdhM2JmYjct/NDdhM2JmYjct-ZWQzMjE3MTQt-w1500._CB664853981_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        title='The lean startup'
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                        rating={5}
                    />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home;
