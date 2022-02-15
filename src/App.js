import { useState } from 'react';
import About from './Components/About/About';
import Alert from './Components/Alert/Alert';
import Expense from './Components/Expense';
import ExpenseForm from './Components/ExpenseForm';
import Food from './Components/FoodApi/Food';
import UseContext from './Components/Hooks/ContectApi/UseContext';
import Effect from './Components/Hooks/Effect';
import UseReducer from './Components/Hooks/UseReducer';
import UseRef from './Components/Hooks/UseRef';
import Navbar from './Components/Navbar/Navbar';
import Textarea from './Components/Textarea';


function App() {

  const [alerts,setAlerts]=useState("")

  const showalert =(message,type)=>{
    

    setAlerts({
      mess:message,
      type:type
    })
 
  }
  
  setTimeout(() => {
    setAlerts({
      mess:"",
      type:''
    })
  }, 3000);


  return (
    <div id="App">
 
         {/* <Navbar  title="HakkaniText" />
         <Alert alerts ={alerts}/>
         <Textarea  showalert={showalert} />
       
         <About /> 
         <Food />
         */}

         {/* <UseRef /> */}
         {/* <Effect/> */}
         {/* <UseReducer /> */}
<UseContext />
              
       
    </div>
  );
}

export default App;
