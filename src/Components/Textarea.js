import React, { createElement, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Textarea = (props) => {

    const [textupper,setTextupper]=useState('')

    const [text,setText]=useState('')

    const handletext =(e)=>{
             
        setTextupper(e.target.value);
    }

    

    const textuppercase=()=>{

        let upper = textupper.toUpperCase()
        // document.getElementById('amartext').value =upper
        setTextupper(upper);
        props.showalert('Text uppercase case is successfully applied','success')
        
        // toast.success("Successfull to uppercase")
    }

    const textcapitalize =()=>{

        let lower = textupper.toLowerCase()
       let value =  lower.replace(/\b\w/g, l => l.toUpperCase())
        // document.getElementById('amartext').value = lower.replace(/\b\w/g, l => l.toUpperCase())

        setTextupper(value)
        props.showalert('Text Capitalize case is successfully applied','success')
        // toast("successfully Capitalizedd ")


    }

    const lowercase =()=>{
        let lower = textupper.toLowerCase()
        // document.getElementById('amartext').value =lower
        setTextupper(lower)
        props.showalert('Text lowercase case is successfully applied','success')


    }

    const handleremove =()=>{
        // document.getElementById('amartext').value =' '
        setTextupper(' ')
        props.showalert('Text removed case is successfully applied','danger')
        // toast.error('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme:"dark"
        //     });
        // // toast.error("Toast removed successfully")


    }

    const handleDownload =()=>{
        const element = document.createElement('a')
        const file = new Blob([document.getElementById('ppp').innerText], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();

    }


    return (
        <div className='container' id="download">
            <h3>Enter The Text To Analize Bellow</h3>
            <div className="form-floating">
             
             <textarea className="form-control"
              placeholder="Leave a comment here" 
              style={{height:'100px'}} 
              onChange={handletext} 
              value={textupper}
              id='amartext'
              ></textarea> 

             

              <button className='btn btn-primary mt-2 me-1' onClick={textuppercase} >Text Uppercase</button>
              <button className='btn btn-warning mt-2 me-1' onClick={lowercase}>Text Lowercase</button>
              <button className='btn btn-info mt-2 me-1' onClick={textcapitalize} > Text Capitalize</button>
              <button className='btn btn-danger mt-2 me-1' onClick={handleremove}>Remove Text</button>
              <button className='btn btn-success mt-2 me-1' onClick={handleDownload}>Download</button>
            </div>

            <div className="container mt-5 border border-1 p-4 text-muted">
                <p id='ppp'>  {textupper}</p>
                <p>Total Length is :{textupper.length}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Textarea;