import { useState, useEffect } from "react";

function App(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(r=>r.json())
      .then(d=>setData(d.slice(0,5)));
  },[]);

  return(
    <div style={{padding:"20px",fontFamily:"Arial"}}>
      <h2>Posts</h2>

      {data.map(i=>(
        <div key={i.id} style={{
          background:"#fff",
          margin:"10px 0",
          padding:"10px",
          borderRadius:"5px",
          boxShadow:"0 1px 4px gray"
        }}>
          {i.title}
        </div>
      ))}
    </div>
  );
}

export default App;
