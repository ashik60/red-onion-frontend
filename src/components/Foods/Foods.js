import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css';

const Foods = (props) => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState('Breakfast');

    useEffect(() => {
        fetch('https://thawing-temple-99876.herokuapp.com/foods')
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    const selectedFoods = foods.filter((food) => food.type === selectedFoodType);

    return (
        <section className='food-area my-5'>
            <div className='container'>
                <nav>
                    <ul className='nav justify-content-center'>
                        <li className='nav-item' onClick={() => setSelectedFoodType('Breakfast')}>
                            <span className={selectedFoodType === 'Breakfast' ? 'active nav-link' : 'nav-link'}>Breakfast</span>
                        </li>
                        <li className='nav-item' onClick={() => setSelectedFoodType('Lunch')}>
                            <span className={selectedFoodType === 'Lunch' ? 'active nav-link' : 'nav-link'}>Lunch</span>
                        </li>
                        <li className='nav-item' onClick={() => setSelectedFoodType('Dinner')}>
                            <span className={selectedFoodType === 'Dinner' ? 'active nav-link' : 'nav-link'}>Dinner</span>
                        </li>
                    </ul>
                </nav>
                <div className='row my-5'>
                    {selectedFoods.map((food) => (
                        <FoodItem food={food} key={food.id} />
                    ))}
                </div>
                <div className='text-center'>
                    {props.cart.length && (
                    <Link to='/checkout'>
                        <button className='btn btn-secondary'>Check Out Your Food</button>
                    </Link>
                )}
                </div>
            </div>
        </section>
    );
};

export default Foods;
