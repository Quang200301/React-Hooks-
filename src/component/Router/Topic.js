import React from "react";

// export  const Topic = () => {
//     return <h1>Topic</h1>;
//   };
class Topic extends React.Component{

  componentDidMount(){
    setTimeout(()=>{
      this.prop.history.push('/about')
      
    },3000)
  }
  render(){
    console.log('>>>check prop:',this.prop  )
    return(
      <div>
        <h2>Hello Topic</h2>
      </div>
    );
  }
}
export default (Topic);