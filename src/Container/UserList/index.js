import React, { Component } from "react";
import List from "./List";
import "./index.css";
import SearchBar from "./SearchBar";
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ user: data });
      });
  }

  searchText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { user, search } = this.state;
    return (
      <div className="container">
        <SearchBar searchText={this.searchText} />
        <List user={user} searchText={search} />
      </div>
    );
  }
}

export default UserList;
