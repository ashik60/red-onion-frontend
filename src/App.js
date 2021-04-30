import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/'>
                    <Banner />
                    <Foods />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
