/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const FaqItem = ({faq}) => {
    const {question, content} = faq;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordian = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div>
        <div className='flex flex-row justify-between p-3 border solid-border border-neutral-150 rounded-md cursor-pointer' onClick={toggleAccordian}>
            <p className="text-[12px] text-textColor lg:text-[20px]">{question}</p>
            <div className={`${isOpen && "bg-primaryColor text-white border-none"} border flex items-center justify-center border-stone-950 rounded-sm`}>
                {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
        </div>
        {isOpen && <div className="border border-stone-300 rounded-sm p-2 text-textColor">{content}</div>}
    </div>
  )
}

export default FaqItem