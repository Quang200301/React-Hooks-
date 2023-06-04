import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [avatar,setavater]=useState()
  const [value, setValue] = useState({
    id: id,
    name: "",
    price: "",
    image: "",
    color: "",
    name_category: "",
    material: "",
    expiry_date: "",
    origin: "",
    description: "",
    tinhtranghang: true,
  });



  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        const data = res.data;
        setValue({
          ...value,
          name: data.name,
          price: data.price,
          image: data.image,
          color: data.color,
          name_category: data.name_category,
          material: data.material,
          expiry_date: data.expiry_date,
          origin: data.origin,
          description: data.description,
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/${id}`, value)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    // const file=e.target.files[0]
    
    //   file.image=URL.createObjectURL(file);

    //   setavater(file);
    
    

   
    }
    

  return (
    <div>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="contentt">
            <div className="panel panel-warning col-md-8 ml">
              <div className="container">
                <div className="panel-body mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Tên Sản phẩm :</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                        className="form-control"
                        value={value.name}
                      />
                    </div>
                    <div className="form-group">
                      <label>Giá Sản phẩm ($) :</label>
                      <input
                        type="number"
                        name="price"
                        value={value.price}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Chọn Ảnh :</label>
                      <input
                        type="file"
                        name="image"
                        value=''
                        onChange={handleInputChange}
                        
                        className="form-control"
                      />{avatar &&(
                        <img src={avatar.image} alt="" /> 
                      )}
                      
                      
                    </div>
                    <label>Loại sản phẩm:</label>
                    <select
                      className="form-control"
                      name="name_category"
                      value={value.name_category}
                      onChange={handleInputChange}
                      required="required"
                    >
                      <option value="sản phẩm mới">mới</option>
                      <option value="sản phẩm hot">hot</option>
                      <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                    </select>
                    <div className="form-group">
                      <label>Màu bánh :</label>
                      <input
                        type="text"
                        name="color"
                        value={value.color}
                        onChange={handleInputChange}
                        className="form-control"
                        />
                        </div>
                        <div className="form-group">
                          <label>Nguyên liệu :</label>
                          <input
                            type="text"
                            name="material"
                            value={value.material}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Hạn sử dụng :</label>
                          <input
                            type="date"
                            name="expiry_date"
                            value={value.expiry_date}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label>Xuất xứ :</label>
                          <input
                            type="text"
                            name="origin"
                            value={value.origin}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <label>Tình trạng hàng :</label>
                        <select
                          className="form-control"
                          name="tinhtranghang"
                          value={value.tinhtranghang}
                          onChange={handleInputChange}
                          required="required"
                        >
                          <option value={true}>Còn hàng</option>
                          <option value={false}>Hết hàng</option>
                        </select>
                        <div className="form-group">
                          <label>Mô tả :</label>
                          <input
                            type="text"
                            name="description"
                            value={value.description}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                        <br />
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Cập Nhật
                          </button>
                          &nbsp;

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Edit;
    

