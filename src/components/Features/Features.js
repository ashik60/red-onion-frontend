import React, { useEffect, useState } from 'react';
import SingleFeature from '../SingleFeature/SingleFeature';
import './Features.css';

function Features(props) {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('https://thawing-temple-99876.herokuapp.com/features')
            .then((res) => res.json())
            .then((data) => {
                setFeatures(data);
            })
            .catch((err) => console.log(err));
    }, [features.length]);

    return (
        <section className='features my-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>Why you choose us</h2>
                                <p className='mt-3 mb-5'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus
                                    asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam
                                    officia adipisci. Nostrum quia soluta vel distinctio delectus!
                                </p>
                            </div>
                        </div>
                    </div>

                    {features.map((feature) => (
                        <SingleFeature key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
