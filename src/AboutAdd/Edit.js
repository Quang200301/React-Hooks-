import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Edit() {
      const navigate = useNavigate();
      const { id } = useParams();
      const [avatar, setAvatar] = useState("");
      const [name, setName] = useState("");

      const url = `https://645e542e8d08100293fcd90e.mockapi.io/sinhvien/${id}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setAvatar(data.avatar);
        setName(data.name);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [url]);

  async function updateData() {
    try {
      const res = await axios.put(url, {
        avatar,
        name,
      });
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateData();
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

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
