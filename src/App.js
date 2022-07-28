import React, { useState } from 'react';
import './App.css';

const Home = () => {

    const [count, setCount] = useState(0);

    const inCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="add">
            <h1>{count}</h1>
            <button className="bt" onClick={inCount}>Adicionar</button>
        </div>
    );

};

export default Home;