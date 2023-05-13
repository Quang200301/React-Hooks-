import React from "react";
import './App.css';
import Routes from "./Router";
import { Switch, Route,BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import {Route,Routes} from "react-router-dom"
import Menu from './component/Menu/Tinhmenu';
import Showmenu from './component/Menu/Showmenu';
import Score from './component/Score/Score';
import White from './component/ShowAPI/Show';
import Add from './Componeent/Add';
import Showdata from './Componeent/Showdata';
import Home from './component/Router/Home';
import About from './component/Router/About';
import Topic from './component/Router/Topic';
function App() {
  return (
    <div className="App">
      <h1>Well come to Router</h1>
      <div>
            <Link to={'/'}>Home</Link>
            <br></br>
            <Link to={'about'}>About</Link>
            <br></br>
            <Link to={'topic'}>Topic</Link>
        </div>
      <Routes>
       
          <Route exact path='/' element={<Home></Home>}/>
          <Route exact path='/about' element={<About></About>}/>
          <Route exact path='/topic' element={<Topic></Topic>}/>
        
      </Routes>
    </div>
  );
}
showContentMenus = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return (<Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
      )
    });
  }
  return <Switch>{result}</Switch>;
}



export default App;
