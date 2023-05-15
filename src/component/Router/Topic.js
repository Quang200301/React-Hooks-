import React from "react";
// import { withRouter } from "react-router-dom";
class Topic extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/about');
    }, 3000);
  }

  render() {
    console.log('>>>check prop:', this.props);
    return (
      <div>
        <h2>Hello Topic</h2>
      </div>
    );
  }
}

export default (Topic);
