import React, { useReducer } from 'react';


const initialState =0;

const reducer=(state,action) =>{
    switch(action){
      case 'increment': return state+1;
      case 'decrement': return state-1;
      case 'resett': return initialState;
      default: return state
    }
}


//action for the another reducer 

const initial ='student'

const reducer2 =(state,action)=>{
    switch(action){
        case 'm-32': return state =(
        <>
         <h1>Goalm Hakkani Mim</h1>
         <p>Depertment of cse </p>
         <p>Roll is : 150132</p>
        </>);

  case 'r-44': return state =(
    <>
     <h1>Rakib Hasen</h1>
     <p>Depertment of cse </p>
     <p>Roll is : 150144</p>
    </>);
    

    case 'b-43': return state =(
        <>
         <h1>Masum</h1>
         <p>Depertment of cse </p>
         <p>Roll is : 150143</p>
        </>);

    default :return initial;
        }
       

}

const UseReducer = () => {

    const[count,dispatch]=useReducer(reducer,initialState)

    const[details,dispatch2]=useReducer(reducer2,initial)

    return (
        <div>
           {/* this is the example of counter function  */}
            <h1>Number is : {count}</h1>
            <button className='btn btn-primary' onClick={()=>dispatch('increment')}>Increment</button>
            <button className='btn btn-info' onClick={()=>dispatch('decrement')}>Decrements</button>
            <button className='btn btn-danger' onClick={()=>dispatch('resett')}>Reset</button>


            {/* thsi is the grating system using reducer  */}

            <div>{details}</div>
            <button className='btn btn-primary' onClick={()=>dispatch2('m-32')}>1510132</button>
            <button className='btn btn-warning'onClick={()=>dispatch2('r-44')}>1510144</button>
            <button className='btn btn-info'onClick={()=>dispatch2('b-43')}>1510143</button>
        </div>
    );
};

export default UseReducer;