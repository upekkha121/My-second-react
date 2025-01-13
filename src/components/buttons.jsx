import { useState } from "react";


const Button = ({text}) => {
    return <>
        <div className="flex items-center justify-center w-full">
            <button className="rounded-[10px] px-[30px] py-[10px] bg-teal-500 text-white font-semibold text-[20px]">
                {text}
            </button>
        </div>
    </>
};

export default Button;