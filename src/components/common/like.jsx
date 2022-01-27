import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const Like = (props) => {
  if (props.liked) {
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={faHeart}
        color="red"
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={faHeartBroken}
        color="red"
      />
    );
  }
};

export default Like;
