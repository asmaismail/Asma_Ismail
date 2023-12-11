import React from 'react';
// import Scroll from './ScrollToTop';
import { ScrollTop } from 'primereact/scrolltop';


const Footer = () => {
  return (
    <>

    <div className='bottom-0 w-full'>
    {/* <div className="card flex flex-column align-items-center" style={{ height: '1500px',color:'white'}}> */}
            <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem',font:'#05C7AE',color:'#05C7AE', backgroundColor: '#05C7AE' }}></i>
            <ScrollTop className='bg-[#05C7AE] py-4 px-4 rounded-full' />
        {/* </div> */}
        <p className='border-b-2 border-white mx-4 w-auto'></p>
        <p className='flex content-center text-white items-center justify-center text-center mb-2'>Copyright © 2023.All rights are reserved.</p>
    </div>
    </>
  )
}

export default Footer