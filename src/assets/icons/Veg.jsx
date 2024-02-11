import React from "react";

const Veg = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
        >
            <path
                fill={color}
                d="M20 4v16H4V4zm2-2H2v20h20zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
            ></path>
        </svg>
    );
};

export default Veg;
