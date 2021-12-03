import React from "react";

const SendMessageIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="4rem"
      height="4rem"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      style={{ fill: "white" }}>
      <desc>Created with Fabric.js 1.7.22</desc>
      <defs />
      <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
        <g
          style={{
            stroke: "none",
            strokeWidth: 0,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "none",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
          <polygon
            points="0,14.69 0,39.65 51,45 0,50.35 0,75.31 90,45 "
            style={{
              stroke: "none",
              strokeWidth: 1,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              fill: "rgba(92, 214, 245, 1)",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="  matrix(1 0 0 1 0 0) "
          />
        </g>
      </g>
    </svg>
  );
};

export default SendMessageIcon;
