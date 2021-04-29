import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState('Breakfast');

    useEffect(() => {
        axios
            .get('https://thawing-temple-99876.herokuapp.com/foods')
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    const selectedFoods = foods.filter((food) => food.type === selectedFoodType);

    return <div></div>;
};

export default Foods;
