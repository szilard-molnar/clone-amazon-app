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
                    <Product />
                </div>

                <div className="home__row">

                </div>

                <div className="home__row">
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
