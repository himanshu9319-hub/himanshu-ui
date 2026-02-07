import React from 'react'
import Card from './card'

const Right = (props) => {
  console.log(props);
  return (
      
      <div className=' h-full w-2/3 p-6 flex-nowrap rounded-4xl overflow-x-auto flex gap-18'>
       {props.users.map(function(elem){
        return <Card number = {elem.number} img={elem.img} intro = {elem.intro} tag = {elem.tag} color={elem.color} />
       })}
       </div>
    
  )
}

export default Right