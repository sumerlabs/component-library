import React from "react";

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
  	<svg {...props} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M55.107 31.206c.715.749.687 1.936-.063 2.65l-18.343 17.5a1.875 1.875 0 0 1-2.59 0l-9.156-8.75a1.875 1.875 0 0 1 2.59-2.712l7.862 7.514 17.049-16.265a1.875 1.875 0 0 1 2.65.063Z"
      fill="#4C42F6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M40 11.875c-15.533 0-28.125 12.592-28.125 28.125S24.467 68.125 40 68.125 68.125 55.533 68.125 40 55.533 11.875 40 11.875ZM8.125 40C8.125 22.396 22.395 8.125 40 8.125c17.604 0 31.875 14.27 31.875 31.875 0 17.604-14.27 31.875-31.875 31.875-17.604 0-31.875-14.27-31.875-31.875Z"
      fill="#4C42F6"
    />
    </svg>
  );
};

export default CheckCircle;
