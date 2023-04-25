import {useState} from "react"
import { GetData } from "../Data/Data"
function Menu (){
    const menu=GetData()
    const [select,setSelect]=useState('')
    const [price,setPrices]=useState('')
    const [refun,setRefun]=useState('')

    const formSelect =(e)=>{
        e.preventDefault()
        const select=e.target.value
        setSelect(select)
        const selectWater=menu.find((item)=>item.name===select)
        let price=''
        if (selectWater) {
            price=selectWater.price
        }
        setPrices(price)
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        const prices=price
        const money=e.target.yourprice.value
        const sum=parseFloat(money)-parseFloat(prices)
        let infom=''
        if (sum<0) {
            infom="bạn không đủ tiền"
        }else{
            infom=sum
        }
        setRefun(infom)
    }
    return(
        <div>
            <form onSubmit={formSubmit}>
           <select  onChange={formSelect}>
            <label>Chon nước</label>
            {menu.map((item)=>(
                <option value={item.name}>{item.name}</option>
            ))}
           
           </select>
           <input name="price" value={price}></input>
           <input name="yourprice"></input>
           <input name="inform" value={refun}></input>
           <button type="submit">OK</button>
           </form>
        </div>
    )
}
export default Menu;