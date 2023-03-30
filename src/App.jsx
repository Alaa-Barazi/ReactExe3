import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Components/Quiz/Quiz'

import Mother from './Components2/Mother/Mother'
function App() {
  const [count, setCount] = useState(0)
  let color='black';
  function changeColor(){
    if(count<0) color='red';
    else if(count>0) color='green';
  }
  return (
    //Section 1
    <>
    {/* <div className="App">
      <button onClick={()=>
         {if (count<10)setCount(count=>count+1)
      }}> Increment</button>
      {changeColor()}
      <label style={{color:color}}> {count}</label>
      <button onClick={()=> {if (count>-10) setCount(count=>count-1)
      }}>Decrement </button>{ changeColor()}
    <br/>
       <Quiz/> <br/> <br/>
    
    </div> */}
    <div className="App">
    <Mother />
  
 </div>
 </>
    
    
  )

}

export default App
