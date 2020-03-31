import React, { Component } from "react";
import Post from "./Post";
import "./index.css";
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
    const { userDetails } = this.state;
    return (
      <div>
        <Post user={userDetails} />
      </div>
    );
  }
}

export default UserDetails;
