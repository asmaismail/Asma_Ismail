import React from 'react';
import Scroll from './ScrollToTop';

const Footer = () => {
  return (
    <>
          <Scroll/>
    <div className='bottom-0 fixed w-full'>
        <p className='border-b-2 border-white mx-4 w-auto'></p>
        <p className='flex content-center text-white items-center justify-center text-center mb-2'>Copyright © 2023.All rights are reserved.</p>
    </div>
    </>
  )
}

export default Footer