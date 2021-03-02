import React from 'react';
import './Loader.scss';

import loader from '../../assets/loader.svg';

const Loader = () => {
    return (
        <div className="loading">
            <img src={loader} alt="" />
        </div>
    );
};

export default Loader;
