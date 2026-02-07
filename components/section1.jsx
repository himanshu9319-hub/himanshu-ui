import React from 'react'
import Navbar from './navbar'
import Left from './left'
import Right from './right'

const Section1 = (props) => {
  console.log(props.users);
  return (<>
    <div className='h-screen w-screen bg-pink-200  '>
      
      <Navbar/>
      <div className='h-[90vh] w-screen px-16 py-6 flex items-center justify-between gap-10'>
        <Left/> <Right users={props.users}/>
        
      </div>

      
     
      
      
      </div>


    </>
  )
}

export default Section1