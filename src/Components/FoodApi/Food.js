import React, { useEffect, useState } from 'react';
import Fooditem from './Fooditem';

const Food = () => {
    const [foods ,setFoods]=useState([])
    
  useEffect(()=>{
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res=>res.json())
      .then(data=>setFoods(data.categories))

    
  },[])
    return (
        <div className='container'>
            <div className="row">
               {
                //    console.log(foods)

                   foods.map(food=> <Fooditem food={food}/>)
                   
                    
               }

            </div>
        </div>
    );
};

export default Food;