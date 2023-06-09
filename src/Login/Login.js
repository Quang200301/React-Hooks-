// import { Component } from "react";
// import ShowIcon from '@mui/icons-material/Visibility';
// import ShowOffIcon from '@mui/icons-material/VisibilityOff';

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showPassword: false,
//     };
//   }

//   render() {
//     return (
//       <section className="py-4 container">
//         <div className="row justify-content-center">
//           <div className="col-3">
//             <div className="input-group mb-3 shadow border rounded">
//               <input
//                 className="form-control bg-dark text-light"
//                 type={this.state.showPassword ? "text" : "password"}
//               />
//               <div className="input-group-append">
//                 <button
//                   className="btn btn-dark text-light"
//                   onClick={() =>
//                     this.setState({ showPassword: !this.state.showPassword })
//                   }
//                 >
//                   {this.state.showPassword ? <ShowIcon /> : <ShowOffIcon />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }


import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Loginone() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  }
  function login()
  {
      console.warn(email,password)
  }

  return (
    <div>
    <h1>HELLO BÀ CON</h1>
    <div className="wrapper">
      <div className='col-sm-6 offset-sm-3' >
      <input type='text' placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
      <br></br>
      <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
      {/* <div className="input-field">
          <input type={type} />
          <span onClick={handleToggle}><Icon icon={icon} size={24} /></span>
        </div> */}
        <br></br>
        <button  className='btn btn-primary' onClick={login}>Login</button>
      </div>

     
      
        
     
    </div>
    </div>
  );
}

export default Loginone;
