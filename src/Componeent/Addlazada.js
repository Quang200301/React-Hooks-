// import axios from 'axios';
// import React, { Component } from 'react';
// import Swal from "sweetalert2";
// import DataTable from "react-data-table-component";
// class Addlazada extends Component {
//     state={
//         name:'',
//         avarta:'',
//         price:'',
//         shopower:'',
//     }
//     handleInput=(e)=>{
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
    
//     Save= async(e)=>{
//         e.preventDefault()
//         const res = await axios.post('http://127.0.0.1:8000/api/add-lazada',this.state);
//         if(res.data.status===200)
//         {
//             console.log(res.data.messange)
//             this.setState({
//                 name:'',
//                 avarta:'',
//                 price:'',
//                 shopower:'',
//             });

//         }
//     }
//     render() {
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-md-12'>
//                         <div className='card'>
//                             <div className='card-header'>
//                                 <h4>Add Lazada</h4>

//                             </div>
//                             <div className='card-body'>
//                                 <form onSubmit={this.Save}>
//                                     <div className='form-group mb-3'>
//                                     <label>
//                                         Name
//                                     </label>
//                                     <input type='text' name="name" onChange={this.handleInput}  value={this.state.name} className='form-control'/>
//                                     </div>
//                                     <div className='form-group mb-3'>
//                                     <label>
//                                         avarta
//                                     </label>
//                                     <input type='text' name="avarta" onChange={this.handleInput}  value={this.state.avarta} className='form-control'/>
//                                     </div>
//                                     <div className='form-group mb-3'>
//                                     <label>
//                                         price
//                                     </label>
//                                     <input type='text' name="price" onChange={this.handleInput}   value={this.state.price} className='form-control'/>
//                                     </div>
//                                     <div className='form-group mb-3'>
//                                     <label>
//                                         shopower
//                                     </label>
//                                     <input type='text' name="shopower" onChange={this.handleInput}   value={this.state.shopower} className='form-control'/>
//                                     </div>
//                                     <div className='form-group mb-3'>
//                                         <button type='submit' className='btn btn-primary'>Save</button>
//                                     </div>
                                    

//                                 </form>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Addlazada;



import axios from "axios";
import { useState } from "react";

function Addlazada() {
  const url = "http://127.0.0.1:8000/api/add-lazada";
  const [data, setData] = useState({    
    name: "",
    avarta: "",
    price: "",
    shopower: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        avarta: data.avarta,
        price: data.price,
        shopower: data.shopower,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <div className="container mt-3">
      <form onSubmit={(e) => submit(e)}>
        <div className="mb-3 mt-3">
          <label>Name</label>
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            placeholder="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label>Avatar</label>
          <input
            onChange={(e) => handle(e)}
            id="avarta"
            value={data.avarta}
            placeholder="avatar"
            name="avatar"
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            onChange={(e) => handle(e)}
            id="price"
            value={data.price}
            placeholder="price"
            name="price"
          />
        </div>
        <div className="mb-3">
          <label>Shop Owner</label>
          <input
            onChange={(e) => handle(e)}
            id="shopower"
            value={data.shopower}
            placeholder="shopower"
            name="shopower"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addlazada;
