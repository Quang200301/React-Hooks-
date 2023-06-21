import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Show(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData();
    },[]);

    const getData= async()=>{
        try{
            const pro= await axios.get('https://645e542e8d08100293fcd90e.mockapi.io/sinhvien')
            setData(pro.data)       
        }catch(error){
            
        }
    }
    function deleteUser(id) {
        fetch(`https://645e542e8d08100293fcd90e.mockapi.io/sinhvien/${id}`, {
          method: "DELETE",
        })
          .then((result) => {
            result.json().then((resp) => {
              Swal.fire("Thành công", "xóa sản phẩm thành công", "success");
              console.warn(resp);
              getData();
            });
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    return(
        <div>
            <h3>HELO PRO</h3>
            <div>
                {
                    data.map((item)=>(
                        <div key={item.id}>
                            <img src={item.avatar}/>
                            <div>{item.name}</div>
                            <Link className="btn btn-primary" to={"/add"}>ADD</Link>
                            <button onClick={() => deleteUser(item.id)}>Delete</button>
                            <Link className="btn btn-primary" to={`/cart/${item.id}`}>Cart
                             </Link>
                             <Link className="btn btn-primary" to={`/edit/${item.id}`}>EDIT
                             </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Show;