import React from 'react';
import features from '../../Data/features.json';
import foods from '../../Data/foods.json';

const AddData = () => {
    const postData = (url, data) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };

    return (
        <div className='container py-5'>
            <h1>Add Products</h1>
            <button
                onClick={() => postData('http://localhost:5500/addfoods', foods)}
                className='btn btn-danger mr-2'
            >
                Add products
            </button>
            <button
                onClick={() => postData('http://localhost:5500/addfeatures', features)}
                className='btn btn-danger'
            >
                Add Features
            </button>
        </div>
    );
};

export default AddData;
