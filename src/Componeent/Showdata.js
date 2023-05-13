import axios from "axios";
import { useEffect, useState } from "react";
function Showdata(){
    const [product,setproduct]=useState([]);

    useEffect(()=>{
        Getdata();
    },[])
    const Getdata=async()=>{
        try{
            const pro=await axios.get("https://645e542e8d08100293fcd90e.mockapi.io/sinhvien")
            setproduct(pro.data)
        }catch (error){
            console.log.error();
        }
    }
    function removeList(id){
        const newproduct=product.filter((l)=>l.id !== id);
        setproduct(newproduct);
    }
    return(
        <div className="ipro"   >
            {product.map((item)=>(
                <div >
                    <div><img src={item.avatar}/></div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <span onClick={()=>removeList(item.id)} style={{marginleft:"10px",color:"red",cursor:"pointer"}}>Delete</span>
                </div>
            ))}
        </div>
    )
}
export default Showdata;