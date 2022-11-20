import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App(){
  return (
    <React/>
  )
}
function React() {
  
  let p=[{nm:'ashik',id:'001'},{nm:'surieya',id:'002'} ]
  
  return (
    <div className="App">
      <Counter></Counter>
      <header className="App-header">
        {p.map(p=><Comp val={p}></Comp>)}
      </header>
    </div>
  );
}

function Counter(){
  const [value,setCount]=useState(0);
  return(
    <div>
      <h1>Count: {value}    
      <button onClick={()=>setCount((value<0)?value-1:0)}>-</button>
      <button onClick={()=>setCount(value+1)}>+</button>
      </h1>
    </div>
  );
}

function Comp(p){
  let style={color:"red",border:"2px solid white",margin:"5px",padding:'5px'}
  return(
    <div style={style}>
      <h1>Welcome to our react app</h1>
      <p>Name: {p.val.nm}</p>
      <p>id: {p.val.id}</p>

    </div>
  )
}


export default App;
