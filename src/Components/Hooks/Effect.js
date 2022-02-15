import React, { useEffect, useState } from 'react';

const Effect = () => {
    let [count,setCount]=useState(0)

    const handleinc =()=>{
        setCount(count = count+1)
        
    }

    const handledec =()=>{
        setCount(count = count-1)

   
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    // it is working when count is clicking  but 1st time its run automaticallly 



   
    return (
       
          <div>
            <p>The Number is : {count}</p>
            <button className='btn btn-primary' onClick={handleinc}>increment</button>
            <button className='btn btn-danger' onClick={handledec}>Decrements</button>
        </div>
        
    );
};

export default Effect;