import { useEffect, useState } from "react";
import axios from "axios";
function Quanque (){
    const [pronext,setpronext]=useState([]);
    useEffect(()=>{
        qu();
    },[]);
    const qu =async()=>{
        try{
            const pro = await axios.get('https://645e542e8d08100293fcd90e.mockapi.io/sinhvien')
                setpronext(pro.data)
        }catch(error){
                console.error();
        }
    }
       
    
    return(
        <div>
            <div>
                {pronext.map((item)=>(
                    <div>
                        <div>{item.name}</div>
                        <div> <img src= {item.avatar}/></div>
                        <div>{item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Quanque;
