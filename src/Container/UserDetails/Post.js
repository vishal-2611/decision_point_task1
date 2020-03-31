import React from "react";

export default function Post({ user }) {
  return (
    <div className="list-container">
      {user.map(item => (
        <div className="list-item-container" key={item.id}>
          <div className="post-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
