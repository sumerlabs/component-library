import React from "react";

const Password = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
        width={17}
        height={15}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.5 3.375c2.07 0 3.75 1.68 3.75 3.75 0 .383-.075.75-.18 1.095l2.295 2.295a8.851 8.851 0 002.385-3.397C15.453 3.833 12.25 1.5 8.5 1.5c-.952 0-1.867.15-2.73.428l1.628 1.627c.352-.105.72-.18 1.102-.18zM1.532.87a.747.747 0 000 1.058L3.01 3.405a8.919 8.919 0 00-2.76 3.72c1.298 3.293 4.5 5.625 8.25 5.625 1.14 0 2.227-.225 3.232-.615l2.04 2.04a.747.747 0 101.058-1.058L2.598.87a.756.756 0 00-1.065 0zM8.5 10.875c-2.07 0-3.75-1.68-3.75-3.75 0-.577.135-1.125.367-1.605l1.178 1.178a2.575 2.575 0 00-.045.427 2.247 2.247 0 002.25 2.25c.15 0 .285-.022.428-.052l1.177 1.177a3.61 3.61 0 01-1.605.375zm2.227-3.997a2.227 2.227 0 00-1.98-1.98l1.98 1.98z"
          fill="#666"
        />
      </svg>
    );
  };
  
  export default Password;
  