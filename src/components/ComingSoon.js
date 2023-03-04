import React from 'react'

import hero from '../../src/assests/hero.png'

const ComingSoon = () => {
  return (
    <div name="coming" className='h-screen w-full bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC] flex justify-center items-center flex-col md:flex-row md:h-screen my-auto'>
      <div className='w-[50%] h-full'><img src={hero} alt="" /></div>
      <div className='mx-auto mb-10'><h1 className='text-4xl'>Page Coming Soon ......</h1></div> 
    </div>
  )
}

export default ComingSoon
