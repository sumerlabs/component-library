import React from "react";

const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={15}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.453 4.151c1.047.085 2.094-.51 2.748-1.266.644-.777 1.07-1.82.96-2.885-.927.043-2.072.596-2.726 1.373-.6.67-1.113 1.756-.982 2.778zm1.253.734c.68-.26 1.522-.583 2.444-.532.59.043 2.29.213 3.381 1.789a.963.963 0 01-.032.02c-.27.172-1.984 1.26-1.964 3.407.02 2.558 2.156 3.512 2.435 3.637l.03.014-.007.02c-.055.176-.423 1.336-1.258 2.524-.774 1.107-1.57 2.192-2.836 2.214-.595.01-.996-.16-1.414-.335-.439-.186-.896-.378-1.617-.378-.747 0-1.226.198-1.686.388-.4.166-.787.326-1.324.346-1.222.043-2.149-1.17-2.923-2.278C.353 13.486-.857 9.42.779 6.674 1.575 5.3 3.025 4.438 4.585 4.417c.68-.012 1.33.24 1.897.46.433.168.818.317 1.135.317.282 0 .652-.142 1.09-.31z"
        fill="#fff"
      />
    </svg>
  );
};

export default ArrowRight;
