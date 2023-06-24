
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Swal from "sweetalert2";
import axios from 'axios';

const PDF = () => {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
    const heading = document.querySelector('.color-changing-heading');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00']; // Danh sách màu sẽ được thay đổi

    let index = 0;
    setInterval(() => {
      heading.style.color = colors[index];
      index = (index + 1) % colors.length;
    }, 10000);
  }, []);

  const getImages = () => {
    axios.get('http://localhost:8000/api/images')
      .then(res => {
        if (res.data) {
          setImages(res.data);
        }
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/upload";
    const data = new FormData();
    data.append('image', image);

    axios.post(url, data)
      .then(res => {
        console.log(res);
        Swal.fire("Thành công", "Cập nhật sản phẩm thành công", "success")
        window.location.reload();
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    
    <div className='container'>
        <h1 className="color-changing-heading">WELLCOME TO FILE PDF-</h1>
      <div className='pdf-file'>
        <div className='chill-file'>
          <div className=''>
            <form onSubmit={submitForm}>
              <input type='file' className='form-control' onChange={handleChange} />
              <button className='btn btn-success mt-6' type='submit'>Upload</button>
            </form>
          </div>
        </div>
      </div><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className='row'>
        {
          images.map((image) => (
            <div className='pdf-good' key={image.id}>
              <embed src={`http://localhost:8000/images/${image.name}`} type='application/pdf' className='pdf-embed' width="800px" height="1600px" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PDF;
