import React from "react";

const ProfileIcon = ({ activeClases }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.5"
      height="26.591"
      className={activeClases}
      viewBox="0 0 22.5 26.591">
      <defs>
        <style dangerouslySetInnerHTML={{ __html: ".a{fill:#fff;}" }} />
      </defs>
      <g transform="translate(-5 -3)">
        <path
          className="a"
          d="M24.163,16.188a1.023,1.023,0,1,0-1.438,1.454,9.141,9.141,0,0,1,2.73,6.542c0,1.251-3.586,3.068-9.2,3.068s-9.2-1.818-9.2-3.07A9.142,9.142,0,0,1,9.74,17.675a1.023,1.023,0,1,0-1.446-1.446A11.175,11.175,0,0,0,5,24.184C5,27.506,10.8,29.3,16.25,29.3S27.5,27.506,27.5,24.184a11.168,11.168,0,0,0-3.337-8Z"
          transform="translate(0 0.293)"
        />
        <path
          className="a"
          d="M16.159,17.318A7.159,7.159,0,1,0,9,10.159,7.159,7.159,0,0,0,16.159,17.318Zm0-12.273a5.114,5.114,0,1,1-5.114,5.114,5.114,5.114,0,0,1,5.114-5.114Z"
          transform="translate(0.091 0)"
        />
      </g>
    </svg>
  );
};

export default ProfileIcon;
