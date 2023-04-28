import { useState } from "react";
import { GetData } from "../Data/Data";

function Show(){
    const[count, setcount]=useState(GetData);
    return(
        <div>
            <div> {count.map((data)=>(
                <div>
                    <div>{data.name}</div>
                    <div>{data.price}</div>
                </div>
            ))}</div>
        </div>
    )
}



//< const[{_,_,_}]=this.state