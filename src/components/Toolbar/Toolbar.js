import React from "react";
import "./Toolbar.css";
import Button from "../Button/Button";

const toolbar = props => {
  const btn = props.roomList.map((name, key) => {
    return <Button key={key} name={name} />;
  });
  return <header className="Toolbar">{btn}</header>;
};

export default toolbar;
