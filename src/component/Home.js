import axios from "axios";
import { useEffect, useState } from "react";
import {NavLink } from 'react-router-dom';

function Homeproject(){
    const [search,setSearch]=useState("");
    const [product,setproduct]=useState([]);
    useEffect(()=>{
        sp();
    },[]);

    const sp=async()=>{
        try{
           const data=await axios. get('http://localhost:3000/products')
            setproduct(data.data)
        }catch(error){
            console.error();
        }
    }
    const handleSearch=(event)=>{
        setSearch(event.target.value);
      };
    
      const ab = product.filter((item)=>
          item.name.toLowerCase().includes(search.toLowerCase())
      )
    return(
        <div>

            <h2> Trang sản phẩm</h2>
            <input id="searchinput" type="text" class="form-control" placeholder="Search here" onChange={handleSearch} />

            <h3><NavLink activeclassName="active" to={'/Adddd'} className="btn btn-primary">Add</NavLink></h3>
            <div className="row">
                {ab.map((item)=>(
                    <div className="col-md-4">
                        <div className="card" style={{width: '18rem'}}>
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h5 className="card-title">{item.price}</h5>
                        <p className="card-text">{item.origin}</p>
                        <NavLink activeclassName="active" to={'/topic'} className="btn btn-primary">AdMin</NavLink>
                        
                        </div>
                    
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Homeproject;