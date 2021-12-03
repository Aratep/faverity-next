import React from "react";

const SearchIcon = ({ activeClases }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.586"
      height="29.609"
      className={activeClases}
      viewBox="0 0 29.586 29.609">
      <defs>
        <style dangerouslySetInnerHTML={{ __html: ".a{fill:#fff;}" }} />
      </defs>
      <g transform="translate(-0.196)">
        <path
          className="a"
          d="M12.389,24.386A12.193,12.193,0,1,1,24.582,12.193,12.207,12.207,0,0,1,12.389,24.386Zm0-22.074a9.881,9.881,0,1,0,9.881,9.881,9.893,9.893,0,0,0-9.881-9.881ZM29.444,29.271a1.156,1.156,0,0,0,0-1.634l-5.172-5.172A1.156,1.156,0,1,0,22.638,24.1l5.172,5.172a1.156,1.156,0,0,0,1.634,0Z"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
