import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Header />
                    <Banner />
                    <Foods />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
