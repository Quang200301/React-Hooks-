import React, { useState } from "react";
import { GetData } from "../component/Data/Data";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const data = GetData(); // Invoke the GetData function to retrieve the data
//  --------------- tìm kiếm sản phẩm theo tên-------------------------------------
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return null; // Add a default return statement if no conditions match
            })
            .map((val) => {
              return (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p className="price">${val.price}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Search;
