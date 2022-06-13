import React from "react";

const ArrowTop = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.996 3.59L4.406 1a.996.996 0 00-1.41 0L.406 3.59c-.63.63-.18 1.71.71 1.71h5.18c.89 0 1.33-1.08.7-1.71z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowTop;
