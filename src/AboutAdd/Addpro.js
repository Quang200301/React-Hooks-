import axios from "axios";
import { useState } from "react";

function Addpro() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");

  const url = "https://645e542e8d08100293fcd90e.mockapi.io/sinhvien";

  async function postData() {
    try {
      const res = await axios.post(url, {
        avatar,
        name,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function submit(e) {
    e.preventDefault();
    postData();
  }

  
 
  return (
    <div className="container mt-3">
      <form>
        <div className="mb-3 mt-3">
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            value={name}
            placeholder="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label>Avatar</label>
          <input
            onChange={(e) => setAvatar(e.target.value)}
            id="avatar"
            value={avatar}
            placeholder="avatar"
            name="avatar"
          />
        </div>
        <button type="submit" onClick={submit}>Submit</button>
        
      </form>
    </div>
  );
}

export default Addpro;
