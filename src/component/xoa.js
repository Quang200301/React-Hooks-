import { useEffect, useState } from "react";

function Xoaad() {
  const [userr, setUserr] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [origin, setOrigin] = useState("");
  const [userid, setUserid] = useState(null);

  useEffect(() => {
    getUserr();
  }, []);

  function getUserr() {
    fetch("http://localhost:3000/products")
      .then((result) => {
        result.json().then((resp) => {
          setUserr(resp);
          setName(resp[0].name);
          setPrice(resp[0].price);
          setImage(resp[0].image);
          setOrigin(resp[0].origin);
          setUserid(resp[0].id);
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

  function deleteUser(id) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json().then((resp) => {
          console.warn(resp);
          getUserr();
        });
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }

  function selectUser(id) {
    let item = userr[id-3];
    setName(item.name);
    setPrice(item.price);
    setImage(item.image);
    setOrigin(item.origin);
    setUserid(item.id);
  }

  function updateUser() {
    let item = { name, price, image,origin };
    console.warn("item", item);
    fetch(`http://localhost:3000/products/${userid}`, {
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
          getUserr();
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
            <td>Image</td>
            <td>Origin</td>
          </tr>
        </thead>
        <tbody>
          {userr.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <img src={item.origin}  />
              </td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => selectUser(item.id)}>Edit</button>
              </td>
              <td>
                 <a href="../Component/add">Add</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br></br>
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}}/><br></br>
        <input type="text" value={origin} onChange={(e)=>{setOrigin(e.target.value)}}/><br></br>
        <button onClick={updateUser}>Update</button>
      </div> */}
    </div>
  );
}

export default Xoaad;





