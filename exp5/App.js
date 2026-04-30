import { useState } from "react";

function App(){
  const [name,setName]=useState("");
  const [out,setOut]=useState("");

  function submit(e){
    e.preventDefault();
    setOut(name);
  }

  return(
    <div style={{textAlign:"center",marginTop:"60px"}}>
      <h2>Form</h2>

      <form onSubmit={submit}>
        <input placeholder="Enter name"
               onChange={e=>setName(e.target.value)}
               style={{padding:"8px"}}/>
        <br/><br/>
        <button>Submit</button>
      </form>

      <p>{out}</p>
    </div>
  );
}

export default App;
