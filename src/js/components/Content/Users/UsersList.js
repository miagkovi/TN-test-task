import React from "react";

export default class UsersList extends React.Component {

  setImagePath(imgNumber) {
    return "img/user-small-photo" + imgNumber + ".jpg";
  }

  render() {
    return (
      <div>
        <h3>Users List</h3>
        <ul>
          <li><img src={this.setImagePath(1)} alt="user photo" /></li>
          <li><img src={this.setImagePath(2)} alt="user photo" /></li>
          <li><img src={this.setImagePath(3)} alt="user photo" /></li>
          <li><img src={this.setImagePath(4)} alt="user photo" /></li>
          <li><img src={this.setImagePath(5)} alt="user photo" /></li>
          <li><img src={this.setImagePath(6)} alt="user photo" /></li>
          <li><img src={this.setImagePath(7)} alt="user photo" /></li>
          <li><img src={this.setImagePath(8)} alt="user photo" /></li>
          <li><img src={this.setImagePath(9)} alt="user photo" /></li>
          <li><img src={this.setImagePath(10)} alt="user photo" /></li>
        </ul>
      </div>
    );
  }
}