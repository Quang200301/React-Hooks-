import axios from "axios";
import React, { useState, useEffect } from "react";

function Searchr() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = () => {
    axios
    .get("https://645e542e8d08100293fcd90e.mockapi.io/sinhvien") 
      .then((response) =>{
        setData(response.data);
      })
      
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={handleSearch}
          />
        </div>
        <div className="template_Container">
          {filteredData.map((item) => (
            <div className="template" key={item.id}>
              <img src={item.avatar} alt="" />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Searchr;
