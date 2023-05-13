import React from "react";
import Home from "./component/Router/Home";
import About from "./component/Router/About";
import Topic from "./component/Router/Topic";

const Routes=[
    {
        path:'/',
        exact:true,
        main:()=><Home/>
    },
    {
        path:'/about',
        exact:true,
        main:()=><About/>
    },
    {
        path:'/topic',
        exact:true,
        main:()=><Topic/>
    },
]
export default Routes;