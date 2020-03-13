import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={loading}
        alt="Loading..."
        style={{ width: "200px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
}
