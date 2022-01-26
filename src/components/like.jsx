import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

class Like extends Component {
  render() {
    if (!this.props.liked) {
      return (
        <FontAwesomeIcon
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
          icon={faHeart}
          color="red"
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
          icon={faHeartBroken}
          color="red"
        />
      );
    }
  }
}

export default Like;
