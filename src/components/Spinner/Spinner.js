import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="pt-5"
    >
      <FontAwesomeIcon icon="spinner" spin size="lg" />
    </div>
  );
};

export default Spinner;
