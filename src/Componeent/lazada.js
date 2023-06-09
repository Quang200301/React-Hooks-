import { useEffect, useState } from "react";
import axios from "axios";
import {
    NavLink,
    Link,
   
  } from "react-router-dom";
function Lazada(){

    const [spham,setspham]=useState([]);
    useEffect(()=>{
        qq();
    },[]);

    const qq=async()=>{
        try{
            const pro=await axios.get("http://127.0.0.1:8000/api/lazada")
            setspham(pro.data)
        }catch (error){
            console.log.error();
        }
    }
    return(
        <div className="container">
            {/* <NavLink active className="active" to={'/laza'}>Add</NavLink> */}
            <div className="row">
                {spham.map((item)=>(
                    <div key={item.id}>
                    <div className="card" style={{width: '18rem'}}>
                    <img src={item.avarta} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <p className="card-text">{item.shopower}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                ))}

             </div>
        </div>
            
            
        
    )
}
export default Lazada;