import React from "react";
import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="spinner"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <RingLoader color={"#1eaedb"} size={150} margin={"10px"} />
    </div>
  );
};

export default Spinner;
