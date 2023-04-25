import React, { Component } from 'react';

class Drink extends Component {
    constructor(props){
        super(props);
        this.state={
            type:'',
            price:'',
            money:'',
        }
    }
    CheckOrder = (money)=>{
        if(money>=this.state.price){
            alert("Đồ uống của bạn đây"+this.state.type+'\n số tiền dư:'+(money-this.state.price)+"đ")

        }
        else{
            alert('không đủ tiền')
        }
    }
    submitForm=(event)=>{
        event.preventDefault();
        if(this.state.price==''){
            alert("Vui lòng nhập số tiền của bạn")
        }
        else{
            this.CheckOrder(this.state.money)
        }
    }
    setHandle=(event)=>{
        let name = event.target.name;
        let value= event.target.value;
        if(name=='money'){
            if(!Number(value)){
                alert("nhập số bạn ơi")
            }
        }
        if(name=='type'){
            if(value=="Caffe sữa"){
                this.setState({price:12000})
            }else if(value=="Caffee đá"){
                this.setState({price:15000})
            }else if(value=="Sting đâu"){}
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Drink;