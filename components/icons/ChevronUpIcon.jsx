import React from "react";

const ChevronUpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="3.8rem"
      width="3.8rem">
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: ".cls-1{fill:transparent;}.cls-2{fill:#fff;}",
          }}
        />
      </defs>
      <title>chevron-up</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="chevron-up">
          <g id="chevron-up-2" data-name="chevron-up">
            <rect
              className="cls-1"
              width={30}
              height={30}
              transform="translate(24 24) rotate(180)"
            />
            <path
              className="cls-2"
              d="M16,14.5a1,1,0,0,1-.71-.29L12,10.9l-3.3,3.18a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42l4-3.86a1,1,0,0,1,1.4,0l4,4a1,1,0,0,1,0,1.42A1,1,0,0,1,16,14.5Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ChevronUpIcon;
