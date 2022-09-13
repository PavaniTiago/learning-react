import React from "react";



const App = () =>{

    const name = 'Tiago Pavani'

    const Button = <button onClick={showEvent}>Show event</button>
    const showEvent = (e) =>{
       console.log("clicked")
       console.log(e)
       alert(name)
    }

   const handleChange = (e) =>{
    const {value} = e.target
    console.log(value)
   }

    return(
        <div>
            <h1>Hello World</h1>
            <input onChange={handleChange} />
            {Button}
        </div>
    );
};
export default App;