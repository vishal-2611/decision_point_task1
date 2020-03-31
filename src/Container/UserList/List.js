import React from "react";
import { Link } from "react-router-dom";
export default function List({ user, searchText }) {
  const filteredUser = !searchText
    ? user
    : user.filter(item => item.id == searchText);

  return (
    <div className="list-container">
      {filteredUser.map(item => (
        <div className="list-item-container" key={item.id}>
          <div className="list-item">
            <Link to={`/info/${item.id}`}>{item.id}</Link>
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
