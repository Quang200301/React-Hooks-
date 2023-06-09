import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect
 
} from "react-router-dom";
import '../src/component/Home.css';
import'../src/Login/Login.css';
import './App.css';
import Adddd from "./component/Add";
import Delete from "./Containers/Delete";
import Menu from './component/Menu/Tinhmenu';
import Showmenu from './component/Menu/Showmenu';
import Score from './component/Score/Score';
import White from './component/ShowAPI/Show';
import Add from './Componeent/Add';
import Showdata from './Componeent/Showdata';
import Home from './component/Router/Home';
import About from './component/Router/About';
import Topic from './component/Router/Topic';
import Nav from "./component/Nav/Nav";
import Search from "./Componeent/Update";
import Searchr from "./Componeent/Search";
import Danhsachcompany from "./ProjectGroup/Danhsachcompany";
import Project from "./Projejct/Nav";
import Test from "./Containers/Test";
import Addd from "./component/Add";
import Xoaad from "./component/xoa";
import Testadd from "./Containers/Testadd";
import Homeproject from "./component/Home";
import Quanque from "./Containers/Quanque";
import Xinchao from "./component/Xinchao";
import ShowProduct from "./Componeent/ShowdataAPI";
import Edit from "./component/Edit";
import Loginone from "./Login/Login";
import Lazada from "./Componeent/lazada";

import Addlazada from "./Componeent/Addlazada";
function App() {
  return (
    // <Loginone/>
    <BrowserRouter>
    <div className="App">
     
       {/* <Nav />  */}

        {/* <Routes> */}
          {/* <Route exact path="/" element={ <Homeproject/> }> */}
           
          {/* </Route> */}

          {/* <Route path="/about" element={ <Xinchao />}> */}
           
           {/* </Route>  */}
          
          {/* <Route path="/topic" element={<Xoaad/>}>
            
           </Route> 

         
          <Route path="/adddd" element={<Adddd/>}>
            
          </Route> 
          <Route path="/edit/:id" element={<Edit/>}> */}
          {/* <Route exact path="/laza" element={<Addlazada/>}>
            
            </Route> 
        </Routes>    
        */}
        {/* <Addlazada/>
     <Lazada/> */}
     <Loginone/>
     </div>
    </BrowserRouter>
  );
}
export default App;
