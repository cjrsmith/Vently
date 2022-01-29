import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const Like = ({ liked, onClick }) => {
  if (liked) {
    return (
      <FontAwesomeIcon
        onClick={onClick}
        style={{ cursor: "pointer" }}
        icon={faHeart}
        color="red"
      />
    );
  } else {
    return (
      <FontAwesomeIcon
        onClick={onClick}
        style={{ cursor: "pointer" }}
        icon={faHeartBroken}
        color="red"
      />
    );
  }
};

export default Like;
