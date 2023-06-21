import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Detail() {
    
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get('https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp');
      setDetail(response.data);
      console.log(response.data.name);
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <div>
      <div>
        {detail && detail.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <Link className="btn btn-primary" to={`/showdetail/${item.id}`}>Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;

