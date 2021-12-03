import React from "react";

const HomeIcon = ({ activeClases }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.4"
      height="26.4"
      className={activeClases}
      viewBox="0 0 26.4 26.4">
      <defs>
        <style dangerouslySetInnerHTML={{ __html: ".a{fill:blue;}" }} />
      </defs>
      <path
        className="a"
        d="M22.044,26.4H4.356A4.423,4.423,0,0,1,0,21.991V12.355A4.328,4.328,0,0,1,1.452,9.134L10.3,1.109a4.357,4.357,0,0,1,5.808,0l8.844,8.026A4.286,4.286,0,0,1,26.4,12.355v9.636A4.422,4.422,0,0,1,22.044,26.4ZM13.2,2.719a2.129,2.129,0,0,0-1.188.4L3.168,11.141a1.552,1.552,0,0,0-.528,1.346v9.636a1.771,1.771,0,0,0,1.716,1.742H21.912a1.753,1.753,0,0,0,1.716-1.742V12.487a2.505,2.505,0,0,0-.528-1.346L14.256,3.115a1.5,1.5,0,0,0-1.056-.4Z"
        transform="translate(0 0)"
      />
    </svg>
  );
};

export default HomeIcon;
