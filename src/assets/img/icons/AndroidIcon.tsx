import React from "react";

const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
            width={18}
            height={18}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            >
            <g clipPath="url(#prefix__clip0_1748_5672)">
                <path
                d="M4.5 13.5c0 .412.338.75.75.75H6v2.625C6 17.497 6.503 18 7.125 18s1.125-.503 1.125-1.125V14.25h1.5v2.625c0 .622.502 1.125 1.125 1.125S12 17.497 12 16.875V14.25h.75c.412 0 .75-.338.75-.75V6h-9v7.5zM2.625 6C2.002 6 1.5 6.503 1.5 7.125v5.25c0 .623.502 1.125 1.125 1.125s1.125-.502 1.125-1.125v-5.25C3.75 6.503 3.248 6 2.625 6zm12.75 0c-.623 0-1.125.503-1.125 1.125v5.25c0 .623.502 1.125 1.125 1.125s1.125-.502 1.125-1.125v-5.25C16.5 6.503 15.998 6 15.375 6zm-3.727-4.38l.975-.975a.371.371 0 000-.532.371.371 0 00-.533 0l-1.11 1.11A4.38 4.38 0 009 .75c-.72 0-1.395.172-1.995.472L5.888.112a.371.371 0 00-.533 0 .371.371 0 000 .533l.982.982A4.487 4.487 0 004.5 5.25h9a4.474 4.474 0 00-1.852-3.63zM7.5 3.75h-.75V3h.75v.75zm3.75 0h-.75V3h.75v.75z"
                fill="#fff"
                />
            </g>
            <defs>
                <clipPath id="prefix__clip0_1748_5672">
                <path fill="#fff" d="M0 0h18v18H0z" />
                </clipPath>
            </defs>
        </svg>
  );
};

export default ArrowLeft;
