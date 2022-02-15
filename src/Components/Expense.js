import React from 'react';

const Expense = ({data}) => {


    return (
        <>

        {
            data?.map(dt=>
                
                <>        
                <div className='d-flex justify-content-between my-2 me-3 align-items-center bg-secondary p-2 text-white' key={dt.id}> 
                   <div className="expense-description d-flex ">
                        <h5 className='bg-dark p-3'>{dt.Name}</h5>
                        <h3 className='ms-5 p-3'>{dt.Roll}</h3>
                    </div>
                    <div className="product-prices ">
                        <h4 className='text-info p-2'>${dt.Message}</h4>
                    </div>
                    
                </div>
                
                </>           
         
      )
        }
       
      

        </>

         
    );
};

export default Expense;