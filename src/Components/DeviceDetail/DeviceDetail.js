import React from "react";
import Watch from "../Watch/Watch";

const DeviceDetail = (props) => {
  return (
    <div>
      <p>Price: {props.price}</p>
      <Watch></Watch>
    </div>
  );
};

export default DeviceDetail;
