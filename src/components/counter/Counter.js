"use client"
import React, { useState } from 'react';

const counterPage = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2> Counter:{counter} </h2>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>setCounter(counter + 1)}
            > Increase </button>
            <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>setCounter(counter - 1)}
            > DeCrease </button>
        </div>
    );
};

export default counterPage;