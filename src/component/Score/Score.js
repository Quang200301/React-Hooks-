import React, { useState } from "react";

const Score = () => {
  const [hk1, setHk1] = useState(0);
  const [hk2, setHk2] = useState(0);
  const [avg, setAvg] = useState(0);
  const [result, setResult] = useState("");
  const [xl, setXL] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    let key = event.target.name;
    let val = event.target.value;
    if (key === "hk1") {
      setHk1(val);
    } else if (key === "hk2") {
      setHk2(val);
    }
    setAvg(parseFloat((parseFloat(hk1) + parseFloat(hk2)) / 2));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Ban la hoc sinh : " + xl);
  };

  const setResultAndXL = () => {
    if (avg > 4.5) {
      setResult("Được lên lớp");
    } else {
      setResult("Ở lại lp");
    }

    if (avg < 4.5) {
      setXL("Yếu");
    } else if (avg < 6.5) {
      setXL("Trung Bình");
    } else if (avg < 8) {
      setXL("Khá");
    } else if (avg < 9) {
      setXL("Giỏi");
    } else if (avg < 10) {
      setXL("Xuất sắc");
    }
  };

  setResultAndXL();

  return (
    <div className="container">
      <h3 className="text-center">Kết quả học tập </h3>
      <form onSubmit={handleSubmit} className="was-validated">
        <div className="form-group">
          <label htmlFor="hk1">Điểm HK1:</label>
          <input
            type="number"
            className="form-control"
            id="hk1"
            name="hk1"
            max={10}
            min={0}
            defaultValue={0}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hk2">Điểm HK2:</label>
          <input
            type="number"
            className="form-control"
            id="hk2"
            name="hk2"
            max={10}
            min={0}
            defaultValue={0}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="avg">Điểm Trung Bình</label>
          <input
            type="number"
            className="form-control"
            readOnly
            value={avg}
          />
        </div>
        <div className="form-group">
          <label htmlFor="result">Kết quả:</label>
          <input type="text" className="form-control" readOnly value={result} />
        </div>
        <div className="form-group">
          <label htmlFor="xl">Xếp loại:</label>
          <input type="text" className="form-control" readOnly value={xl} />
        </div>
        <br />
        <button type="submit" value="submit" className="btn btn-primary">
          XEM KẾT QUẢ
        </button>
      </form>
    </div>
  );
};

export default Score;