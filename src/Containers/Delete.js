import { useEffect, useState } from "react";

function Delete() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch("https://645e542e8d08100293fcd90e.mockapi.io/sinhvien")
      .then((result) => {
        result.json().then((resp) => {
          setUser(resp);
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

  return (
    <div className="hi">
      <h1>DeleteUser with API</h1>
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
                <button onClick={() => deleteUser(item.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
