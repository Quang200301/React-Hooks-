import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
 
} from "react-router-dom";
import './App.css';


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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
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
      <Nav/>
      <Routes>
          <Route exact path="/" element={ <Showdata />}>
           
          </Route>
        <Route path="/about" element={ <Add />}>
           
          </Route>
          <Route path="/topic" element={<Topic/>}>
            
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}
// showContentMenus = (routes) => {
//   var result = null;
//   if (routes.length > 0) {
//     result = routes.map((route, index) => {
//       return (<Route
//         key={index}
//         path={route.path}
//         exact={route.exact}
//         component={route.main}
//       />
//       )
//     });
//   }
//   return <Switch>{result}</Switch>;
// }



export default App;
