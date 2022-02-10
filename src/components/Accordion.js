import { useState } from "react";

export default function Accordian({title, content}){
    const [isActive, setIsActive] = useState(false)

    const handleActive = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="flex flex-col max-w-[18rem]">
            <div className='flex flex-row justify-between border-b-2 border-black py-3'>
                <p className="pr-50">{title}</p>
                <button onClick={handleActive}>{isActive ? '+' : '-'}</button>
            </div>
            <div>
            {isActive && <div className="bg-base2 py-3 pl-3"><p>{content}</p></div>}
            </div>
        </div>
    )
}