import React from "react";

export function RelatedRead(props) {
    return (<>
        <div 
        className="w-full px-5 py-6 items-center rounded-3xl my-3 bg-white flex flex-col sm:flex-row justify-between ">
            <div>
                <p className="text-[#560216] font-extrabold text-lg">
                    {props.children}
                </p>
            </div>
            <button type="submit" className="min-w-fit px-4 py-2 bg-[#560216] text-white uppercase border rounded-full hover:bg-green-600"> 
            <a href="">Click Here</a>
            </button>
        </div>
    </>);
}