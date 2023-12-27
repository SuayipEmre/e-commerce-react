import classNames from 'classnames';
import React from 'react'
import { FaCamera } from "react-icons/fa";
import { RatingPropsType } from './type';



const Rating: React.FC<RatingPropsType> = ({ rate, count , padding}) => {

    const rating = Math.round(rate);
    const star = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            star.push(<span key={i} className='text-[#fec000]'>★</span>);
        } else {
            star.push(<span key={i} className='text-gray-600'>★</span>);
        }
    }
    return (
        <div className={classNames('flex items-center gap-2',{
            'px-5' : padding
        })}>
            <span>{star}</span>
            <span className='font-extralight text-[10px] text-gray-400'>({count})</span>
            <span><FaCamera /></span>
        </div>
    )
}

export default Rating

