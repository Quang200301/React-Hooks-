import React, { useState } from 'react';

const Loginone = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>HELLO BÀ CON</h1>
      <div className="wrapper">
        <div className='col-sm-6 offset-sm-3'>
          <input type='text' name='email' placeholder='email' value={value.email} onChange={handleChange} className='form-control' />
          <br />
          <input type='password' name='password' placeholder='password' value={value.password} onChange={handleChange} className='form-control' />
          <br />
          <button className='btn btn-primary' onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Loginone;
