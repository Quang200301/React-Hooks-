import { useEffect, useState } from "react";
import axios from "axios";
function Test(){
    const [data,setdata]=useState([]);
    useEffect(()=>{
        hii();
    },[]);
    const hii=()=>{
        axios
        .get('http://127.0.0.1:8000/api/products')
        .then((Response)=>{
            setdata(Response.data);
          })
          .catch((error)=>{
            console.error("Error fetching from API",error);
          });
    }
    return(
        <div>
            <div >
                {data.map((item)=>(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>{item.image}</div>
                    </div>
                ))}
            </div>
        </div>
    )


}
export default Test;