import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
export default class PDF extends Component {
    constructor(props){
        super(props)
        this.state={
            image:'',
            images:[]
        }
    }
    componentDidMount(){
        this.getImages();
    }
    getImages = ()=>{
        axios.get('http://localhost:8000/api/images').then(res=>{
            if(res.data){
                this.setState({
                    images : res.data
                })
            }
        })
    }
    handleChange =(e)=>{
        this.setState({
            image:e.target.files[0]
        });
    }
    submitForm= (e)=>{
        e.preventDefault();
        const url = "http://localhost:8000/api/upload";
        const data = new FormData();
        data.append('image',this.state.image);
        // axios
        axios.post(url,data).then(res=>{
            console.log(res);
        })
    }
    render() {
        return (
            <div className='container mt-4'>
                <div className='row justify-content-center'>
                    <div className='col-sm-4'>
                        <div className='card p-4'>
                            <form onSubmit={this.submitForm}>
                                <input type='file' className='form-control' onChange={this.handleChange} />
                                <button className='btn btn-success mt-3' type='submit'>Upload</button>
                            </form>
                        </div> 
                    </div>
                </div>
                <div className='row'>
                    {
                        this.state.images.map((image) => (
                            <div className='col-sm-3' key={image.name}>
                                <embed src={`http://localhost:8000/images/${image.name}`} type='application/pdf' className='pdf-embed' />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

