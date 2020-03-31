import React, { Component } from "react";

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: []
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ userDetails: data });
      });
  }
  render() {
    return <div>Testing</div>;
  }
}

export default UserDetails;
