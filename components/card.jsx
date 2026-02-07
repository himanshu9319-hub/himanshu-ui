import React from 'react'

const Card = (props) => {
  return (
    <div className='h-130 w-60 rounded-4xl shrink-0 relative'>
      <img className='h-full w-full object-cover overflow-hidden rounded-4xl' src={props.img} alt="" />
      <div className='h-130 w-60 rounded-4xl absolute top-28 object-cover p-2 '>
        <div className=' font-semibold absolute  rounded-full bg-white p-1 h-5 w-5 flex justify-center items-center'>{props.number}</div>
    <p className='text-shadow-2xl  absolute bottom-40 mb-5 text-white text-m font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod atque quae voluptate mollitia aliquam facere quisquam aut quam ex aperiam.</p>
    <button className= {`hover:bg-green-100 ${props.color === 'green' ? 'bg-green-300' : props.color === 'red' ? 'bg-red-300' : 'bg-yellow-300'} rounded-full text-white text-m absolute bottom-30 p-2 `}> {props.tag} </button>
    </div>
    </div>
  )
}

export default Card