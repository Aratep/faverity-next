import React from "react";

const PlusIcon = ({ activeClases }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41.667"
      height="41.667"
      className={activeClases}
      viewBox="0 0 41.667 41.667">
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: ".a{fill:#fff;}.b{fill:#ffffff;}",
          }}
        />
      </defs>
      <g transform="translate(-187.75 -837.25)">
        <g transform="translate(187.75 837.25)">
          <g transform="translate(0 0)">
            <g transform="translate(0 0)">
              <path
                className="a"
                d="M39.931,19.1a1.737,1.737,0,0,0-1.736,1.736A17.36,17.36,0,1,1,33.154,8.6a1.736,1.736,0,0,0,2.464-2.446,20.833,20.833,0,1,0,6.049,14.679A1.737,1.737,0,0,0,39.931,19.1Z"
                transform="translate(0 0)"
              />
            </g>
          </g>
          <g transform="translate(12.153 12.153)">
            <path
              className="b"
              d="M127.625,118.944h-5.208v-5.208a1.736,1.736,0,0,0-3.472,0v5.208h-5.208a1.736,1.736,0,0,0,0,3.472h5.208v5.208a1.736,1.736,0,0,0,3.472,0v-5.208h5.208a1.736,1.736,0,0,0,0-3.472Z"
              transform="translate(-112 -112)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PlusIcon;
