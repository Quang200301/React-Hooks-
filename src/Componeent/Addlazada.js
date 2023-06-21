
import axios from "axios";
import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

function Addlazada() {
  const [name, setname] = useState();
  const [avarta, setavarta] = useState();
  const [price, setprice] = useState(0);
  const [shopower, setshopower] = useState();
  // let navigate = useNavigate();

  const url = "http://127.0.0.1:8000/api/addLazada";
 


  function submit() {
 
    const postData = async () => {
      try {
        const res = await axios.post(url, {
          name,
          avarta,
          price,
          shopower
        })
      } catch (error) {
        console.log(error);
      }
    }
   
  }


  console.log(name);

  return (
    <div className="container mt-3">
      <form>
        <div className="mb-3 mt-3">
          <label>Name</label>
          <input
            onChange={(e) => setname(e.target.value)}
            id="name"
            value={name}
            placeholder="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label>Avatar</label>
          <input
            onChange={(e) => setavarta(e.target.value)}
            id="avarta"
            value={avarta}
            placeholder="avatar"
            name="avarta"
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            onChange={(e) => setprice(e.target.value)}
            id="price"
            value={price}
            placeholder="price"
            name="price"
          />
        </div>
        <div className="mb-3">
          <label>Shop Owner</label>
          <input
            onChange={(e) => setshopower(e.target.value)}
            id="shopower"
            value={shopower}
            placeholder="shopower"
            name="shopower"
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
          </label>
        </div>
        <button type="button" onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default Addlazada;
