import React from "react";

const Profile = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg">
              <rect width={66} height={66} rx={33} fill="#8A43F5" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33 15.422c-9.708 0-17.578 7.87-17.578 17.578 0 9.708 7.87 17.578 17.578 17.578 9.708 0 17.578-7.87 17.578-17.578 0-9.708-7.87-17.578-17.578-17.578ZM13.078 33c0-11.003 8.92-19.922 19.922-19.922S52.922 21.998 52.922 33 44.002 52.922 33 52.922c-11.003 0-19.922-8.92-19.922-19.922Z"
				fill="#fff"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33 24.797a6.64 6.64 0 1 0 0 13.281 6.64 6.64 0 0 0 0-13.281Zm-8.984 6.64a8.984 8.984 0 1 1 17.969 0 8.984 8.984 0 0 1-17.97 0Z"
				fill="#fff"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M33 40.422a12.891 12.891 0 0 0-11.494 7.055 1.172 1.172 0 1 1-2.09-1.061 15.234 15.234 0 0 1 27.168 0 1.172 1.172 0 1 1-2.09 1.061A12.89 12.89 0 0 0 33 40.422Z"
				fill="#fff"
			/>
		</svg>
	);
};

export default Profile;
