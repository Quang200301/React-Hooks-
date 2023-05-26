import { useEffect, useState } from "react";
import Add from "../Componeent/Add";
import { Link } from "react-router-dom";
function Delete() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch("https://645e542e8d08100293fcd90e.mockapi.io/sinhvien")
      .then((result) => {
        result.json().then((resp) => {
          setUser(resp);
          setName(resp[0].name);
          setPrice(resp[0].price);
          setAvatar(resp[0].avatar);
          setUserid(resp[0].id);
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  function deleteUser(id) {
    fetch(`https://645e542e8d08100293fcd90e.mockapi.io/sinhvien/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
          getUser();
        });
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }

  function selectUser(id) {
    let item = user[id-3];
    setName(item.name);
    setPrice(item.price);
    setAvatar(item.avatar);
    setUserid(item.id);
  }

  function updateUser() {
    let item = { name, price, avatar };
    console.warn("item", item);
    fetch(`https://645e542e8d08100293fcd90e.mockapi.io/sinhvien/${userid}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
          getUser();
        });
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  }

  return (
    <div className="hi">
      <h1>DeleteUser with API</h1>
      <div>
      <table border="1 solid black">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Img</td>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.avatar} alt={item.name} />
              </td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item.id)}>Edit</button>
              </td>
              <td>
                  <Link to="/add">Add</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br></br>
        <input type="text" value={avatar} onChange={(e)=>{setAvatar(e.target.value)}}/><br></br>
        <button onClick={updateUser}>Update</button>
      </div>
    </div>
  );
}

export default Delete;






