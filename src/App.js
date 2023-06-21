import React from "react";
import {
  Routes,
  Route,
  Link,
  Redirect

} from "react-router-dom";
import '../src/component/Home.css';
import '../src/Login/Login.css';
import './App.css';
import '../src/FlilePDF/Style.css';
// import Adddd from "./component/Add";
// import Delete from "./Containers/Delete";
// import Menu from './component/Menu/Tinhmenu';
// import Showmenu from './component/Menu/Showmenu';
// import Score from './component/Score/Score';
// import White from './component/ShowAPI/Show';
// import Add from './Componeent/Add';
// import Showdata from './Componeent/Showdata';
// import Home from './component/Router/Home';
// import About from './component/Router/About';
// import Topic from './component/Router/Topic';
// import Nav from "./component/Nav/Nav";
// import Search from "./Componeent/Update";
// import Searchr from "./Componeent/Search";
// import Danhsachcompany from "./ProjectGroup/Danhsachcompany";
// import Project from "./Projejct/Nav";
// import Test from "./Containers/Test";
// import Addd from "./component/Add";
// import Xoaad from "./component/xoa";
// import Testadd from "./Containers/Testadd";
// import Homeproject from "./component/Home";
// import Quanque from "./Containers/Quanque";
// import Xinchao from "./component/Xinchao";
// import ShowProduct from "./Componeent/ShowdataAPI";
// import Edit from "./component/Edit";

import Lazada from "./Componeent/lazada";
import Detail from "./Baitest/Detail";

import Addlazada from "./Componeent/Addlazada";
import ShowDetail from "./Baitest/Showdetail";
import { Login } from "@mui/icons-material";
import Loginone from "./Login/Signup";
import Show from "./AboutAdd/Show";
import Addpro from "./AboutAdd/Addpro";
import Cart from "./AboutAdd/Addcart";
import Edit from "./AboutAdd/Edit";
import PDF from "./FlilePDF/PDF";
function App() {
  return (
    <>
    {/* // <Loginone /> */}
      <div className="App">

        {/* <Nav />  */}

        {/* <Routes>
          <Route exact path="/add" element={<Addlazada />}>
          </Route>
        // </Routes> */}

       {/* <Addlazada/> */}
      
      
        {/* <Lazada /> */}
        {/* <Routes>
              <Route exact path="/"  element={<Detail/>} />
              <Route path="/showdetail/:id" element={<ShowDetail></ShowDetail>} />
        </Routes> */}
       
         {/* <Routes>
              <Route exact path="/"  element={<Show/>} />
              <Route path="/add" element={<Addpro/>} />
              <Route path="/cart/:id" element={<Cart/>} />
              <Route path="/edit/:id" element={<Edit/>} />
        </Routes> */}
        {/* <Detail/> */}
        {/* <Loginone/> */}
        <PDF/>
      </div>
    </>
  );
}
export default App;
