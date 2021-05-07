import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AddData from './components/AddData/AddData';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OrderComplete from './components/OrderComplete/OrderComplete';
import SearchResult from './components/SearchResult/SearchResult';
import Shipment from './components/Shipment/Shipment';
import { AuthProvider, PrivateRoute } from './components/SignUp/AuthProvider';
import SignUp from './components/SignUp/SignUp';

function App() {
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState(null);

    const [deliveryDetails, setDeliveryDetails] = useState({
        todoor: null,
        road: null,
        flat: null,
        businessname: null,
        address: null,
    });

    const [userEmail, setUserEmail] = useState(null);

    const deliveryDetailsHandler = (data) => {
        setDeliveryDetails(data);
    };
    const getUserEmail = (email) => {
        setUserEmail(email);
    };

    const clearCart = () => {
        const orderedItems = cart.map((cartItem) => {
            return { food_id: cartItem.id, quantity: cartItem.quantity };
        });

        const orderDetailsData = { userEmail, orderedItems, deliveryDetails };
        fetch('https://thawing-temple-99876.herokuapp.com/submitorder', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(orderDetailsData),
        })
            .then((res) => res.json())
            .then((data) => setOrderId(data._id));
        console.log(orderId);

        setCart([]);
    };

    const cartHandler = (data) => {
        const alreadyAdded = cart.find((crt) => crt.id == data.id);
        const newCart = [...cart, data];
        setCart(newCart);
        if (alreadyAdded) {
            const reamingCarts = cart.filter((crt) => cart.id != data);
            setCart(reamingCarts);
        } else {
            const newCart = [...cart, data];
            setCart(newCart);
        }
    };

    const checkOutItemHandler = (productId, productQuantity) => {
        const newCart = cart.map((item) => {
            if (item.id == productId) {
                item.quantity = productQuantity;
            }
            return item;
        });

        const filteredCart = newCart.filter((item) => item.quantity > 0);
        setCart(filteredCart);
    };

    return (
        <AuthProvider>
            <Router>
                <div className='main'>
                    <Switch>
                        <Route exact path='/'>
                            <Header cart={cart} />
                            <Banner />
                            <Foods cart={cart}></Foods>
                            <Features />
                            <Footer />
                        </Route>
                        <Route path='/food/:id'>
                            <Header cart={cart} />
                            <FoodDetails cart={cart} cartHandler={cartHandler} />
                            <Footer />
                        </Route>
                        <Route path='/search=:searchQuery'>
                            <Header cart={cart} />
                            <Banner />
                            <SearchResult />
                            <Features />
                            <Footer />
                        </Route>
                        <PrivateRoute path='/checkout'>
                            <Header cart={cart} />
                            <Shipment
                                deliveryDetails={deliveryDetails}
                                deliveryDetailsHandler={deliveryDetailsHandler}
                                cart={cart}
                                clearCart={clearCart}
                                checkOutItemHandler={checkOutItemHandler}
                                getUserEmail={getUserEmail}
                            />
                            <Footer />
                        </PrivateRoute>
                        <PrivateRoute path='/order-complete'>
                            <Header cart={cart} />
                            <OrderComplete deliveryDetails={deliveryDetails} orderId={orderId} />
                            <Footer />
                        </PrivateRoute>
                        <Route path='/add-data'>
                            <Header cart={cart} />
                            <AddData></AddData>
                            <Footer />
                        </Route>
                        <Route path='/login'>
                            <SignUp />
                        </Route>
                        <Route path='*'>
                            <Redirect to='/' />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
