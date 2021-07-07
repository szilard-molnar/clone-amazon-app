import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzUwMTVjZTAt/NzUwMTVjZTAt-NmI3MWUwNmYt-w1500._CB666233452_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer fro Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61Jhk2iYwHL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/81IyIIgqQPL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
                    />
                    <Product 
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg"
                    />
                    <Product 
                        id="325435345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="90729332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
