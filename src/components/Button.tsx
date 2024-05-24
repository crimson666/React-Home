import React from "react";

interface buttonData {
  data: String;
  color?: "primary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ data, onClick, color }: buttonData) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {data}
    </button>
  );
};

export default Button;
