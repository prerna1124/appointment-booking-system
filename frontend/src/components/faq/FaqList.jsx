import React from 'react'
import {faqs} from "../../assets/data/faqs"
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <div className='h-[350px] w-auto flex flex-col gap-1'>
        {faqs.map((faq, index)=> <FaqItem faq={faq} key={index}/>)}
    </div>
  )
}

export default FaqList