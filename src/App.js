import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Header />
                    <Banner />
                  
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
