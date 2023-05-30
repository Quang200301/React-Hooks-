import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect
 
} from "react-router-dom";
import './App.css';

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
// import Home from "./ComponentNew/Home";
import Testadd from "./Containers/Testadd";


// function App() {
//   return (
    // <BrowserRouter>
    // <div className="App">
      {/* <h1>Well come to Router</h1>
      <div>
            <Link to={'/'}>Home</Link>
            <br></br>
            <Link to={'about'}>About</Link>
            <br></br>
            <Link to={'topic'}>Topic</Link>
        </div> */}
      {/* <Routes>
       
          <Route exact path='/' element={<Home></Home>}/>
          <Route exact path='/about' element={<About></About>}/>
          <Route exact path='/topic' element={<Topic></Topic>}/>
        
      </Routes> */}
{/*       
        <Nav/> 
      <Routes>
          <Route exact path="/" element={ <Showdata />}>
           
          </Route>
        <Route path="/about" element={ <Add />}>
           
          </Route>
          <Route path="/topic" element={<Delete/>}>
            
          </Route> 
        </Routes>  */}
        {/* <Searchr/> */}
        
    // </div>
    // </BrowserRouter>


  






function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Routes>
        </div>
      </BrowserRouter> */}
       {/* <Project/> 
      <Routes>
          <Route exact path="/" element={ <Showdata />}>
           
          </Route>
        <Route path="/about" element={ <Add />}>
           
          </Route>
          <Route path="/topic" element={<Delete/>}>
            
          </Route> 
        </Routes>   */}
        {/* <Danhsachcompany/> */}
        <Testadd/>
     </div>
    </BrowserRouter>
  );
}
export default App;
