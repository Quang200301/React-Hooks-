import axios from "axios";
import { useState } from "react"

 function Add(){
  const url="https://645e542e8d08100293fcd90e.mockapi.io/sinhvien "
    const [data,setdata]=useState({
      name:"",
      avatar:"",
      price:"",
    });


    function submit(e){
      e.preventDefault();
      axios.post(url,{
        name:data.name,
        avatar:data.avatar,
        price:data.price
      })
      .then(res=>{
        console.log(res.data)
      })

    }
    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setdata(newdata)
      console.log(newdata)
    }

    


    return(
        <div className="container mt-3">
       
        <form onSubmit={(e)=>submit(e)} >
          <div className="mb-3 mt-3">
            <label >Name</label>
            <input  onChange={(e)=>handle(e)} id="name"value={data.name} placeholder="name" name="name"/>
          </div>
          <div className="mb-3">
            <label >avatar</label>
            <input onChange={(e)=>handle(e)} id="avatar"value={data.avatar}placeholder="avatar" name="avatar"/>
          </div>
          <div className="mb-3">
            <label>Price</label>
            <input onChange={(e)=>handle(e)} id="price" value={data.price}placeholder="price" name="price"/>
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" /> Remember me
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    
    )
 }
 export default Add;
 
 