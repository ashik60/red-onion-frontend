import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState(null);
    const getQuey = (e) => setSearchQuery(e.target.value);
    return (
        <section className='banner d-flex align-items-center text-center'>
            <div className='container'>
                <h1>Best Food Waiting For Your Belly</h1>
                <div className='search-box col-md-6 my-5 mx-auto'>
                    <input
                        onChange={getQuey}
                        placeholder='Search Food Items'
                        type='text'
                        id='query'
                        className='form-control'
                    />
                    <Link to={'/search' + searchQuery}>
                        <button
                            onClick={() => window.scrollBy(0, 500)}
                            className='btn btn-danger btn-rounded search-btn '
                        >
                            Search
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
