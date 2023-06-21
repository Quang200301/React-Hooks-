import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        getData();
    }, [id]);

    const getData = async () => {
        try {
            const response = await axios.get(`https://6471cfab6a9370d5a41ab469.mockapi.io/qlsp/${id}`);
            setDetail(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="row">
          {detail ? (
            <div className="card mb-3" style={{maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={".."+detail.image} className="img-fluid rounded-start"  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tên:{detail.name}</h5>
                    <p className="card-text">Giá:{detail.price}vnđ</p>
                    <p className="card-text">Mô tả:<small className="text-muted">{detail.description}</small></p>
                    <p className="card-text">ID:{detail.id}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
      

}

export default ShowDetail;
