import React from 'react'
import {useNavigate,useLocation} from 'react-router-dom';


const FashionCard = ({product}) => {
  const {pathname}=useLocation();

  const {imageUrl,price,_id,discountedPrice,title} = product;
  const navigate=useNavigate()
  return (
    <div className='p-2 hover:shadow-lg cursor-pointer group' onClick={()=>{navigate(`${pathname}/${_id}`)}}>
      <div className='h-[600px]'>
        <img src={imageUrl} alt='' className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-90'/>
      </div>
      <div>
        <h1 className='font-semibold mt-1'>{title}</h1>
        <div className='flex gap-5'>
        <p className=' font-light'>Rs {discountedPrice}</p>
        <p className=' line-through font-light'>Rs {price}</p>
        </div>
      </div>
    </div>
  )
}

export default FashionCard