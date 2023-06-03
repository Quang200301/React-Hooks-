import axios from "axios";
import { useEffect, useState } from "react";

function Searchr(){
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);

  useEffect(()=>{
    hi();
  },[]);
  const hi=()=>{
    axios
    .get("https://645e542e8d08100293fcd90e.mockapi.io/sinhvien")
    .then((Response)=>{
      setData(Response.data);
    })
    .catch((error)=>{
      console.error("Error fetching from API",error);
    });
  }
  const handleSearch=(event)=>{
    setSearch(event.target.value);
  };

  const a = data.filter((item)=>
      item.name.toLowerCase().includes(search.toLowerCase())
  )
  return(
    <div>
      <div>
          <input 
            id="searchinput"
            type="text"
            className="form-control"
            placeholder="Search here"
            onChange={handleSearch}
          />
      </div>
      <div className="template_Container">
        {a.map((item)=>(
            <div key={item.id}>
            <img src={item.avatar}/>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
  
          </div>
        ))}
        
      </div>
    </div>
  )
}
export default Searchr;