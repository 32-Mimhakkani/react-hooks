import React, { createContext } from 'react';
import Com3 from './Com3';

export const details = {
    name:'Hakkani',
    roll:150132,
    dept:'cse'
}


const personaldetails = createContext()

const UseContext = () => {
    return (
        <personaldetails.Provider value="golam hakkani mim">
        <div>
            <h1>I am use Context </h1>
            <Com3 />
        </div>
        </personaldetails.Provider>
    );
};

export default UseContext;