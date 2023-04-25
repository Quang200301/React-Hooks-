import React, { useState } from "react";
import { GetData } from "../Data/Data";
const DrinkForm = () => {
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState(

  );
  const [price, setPrice] = useState(0);
  const [nhaptien,setNhaptien]=useState(0);

  const handleChange = (event) => {
    if (event.target.name === "type") {
      setType(event.target.value);
    } else if (event.target.name === "quantity") {
      setQuantity(parseInt(event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "1") {
      setPrice(15000 * quantity);
    } else if (type === "2") {
      setPrice(12000 * quantity);
    }else if (type === "3") {
        setPrice(10000 * quantity);
      }
     else {
      setPrice(8000 * quantity);
    }
    const sd=nhaptien-price;
    if (price > nhaptien) {
        alert("Số tiền của bạn không đủ để mua các sản phẩm này!");
        return;
      }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Loại nước:
          <select name="type" value={type} onChange={handleChange}>
            <option value="Cà phê sữa">Cà phê sữa</option>
            <option value="Cà phê đá">Cà phê đá</option>
            <option value="Sting dâu">Sting dâu</option>
            <option value="Trà đá">Trà đá</option>
          </select>
        </label>
        <br />
        <label>
          Giá tiền:
          <input value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </label><br />
        <label>
            Nhập tiền:
            <input value={nhaptien} onChange={e => setNhaptien(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Thanh toán</button>
      </form>
      <p>Số tiền dư: {sd} đồng</p>
    </div>
  );
};

export default DrinkForm;
