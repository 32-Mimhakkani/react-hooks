import React, { useRef, useState } from 'react';

const UseRef = () => {



    const inp_name =useRef(null)
    const inp_email =useRef(null)
    const inp_pass =useRef(null)
    const inp_img =useRef(null)

 const handlesubmit =(e)=>{
     e.preventDefault();
     const name = inp_name.current.value;
     const email = inp_name.current.value;
     const pass = inp_pass.current.value;
     const image = inp_img.current.value;

   const objj ={
       name,
       email,
       pass,
       image
   }
     console.log(objj);
     inp_name.current.value=''
     inp_name.current.value=''
     inp_pass.current.value=''
     inp_img.current.value=''

 }


    return (
        <div className='container border border-muted mt-5 p-5'>
            <div className='row'>
            <form onSubmit={handlesubmit}>

                <div className="mb-3">
                <label htmlFor="exampleInputEmddail1" className="form-label">Name</label>
                <input type="text" ref={inp_name}  className="form-control"   id="exampleInpdsdutEmail1" aria-describedby="emailsdsHelp"/> 
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                <input type="text" ref={inp_email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEwwmail1" className="form-label">Email </label>
                <input type="file" ref={inp_img}  className="form-control" id="exampleInpwwutEmail1" aria-describedby="emailHwwelp"/>
                
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" ref={inp_pass}  className="form-control" id="exampleInputPassword1"/>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                            </div>
        </div>
      
    );
};

export default UseRef;