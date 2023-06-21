import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Cart() {
  const { id } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://645e542e8d08100293fcd90e.mockapi.io/sinhvien/${id}`
       
      );
      console.log(response.data.name);
      if (Array.isArray(response.data)) {
        setCart(response.data);
      
       } 
       else {
        setCart([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>HELO</h3>
      {cart.map((item)=>(
        <div>
            {item.name}
        </div>
      ))}
      {/* <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">NAME</th>
            <th scope="col">IMAGE</th>
            <th scope="col">PRICE</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>
                <img src={item.avatar} alt="Avatar" />
              </td>
              <td>{item.price}</td>
             
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default Cart;
