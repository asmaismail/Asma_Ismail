
// function RangeSlider() {
//   const [value, setValue] = React.useState([ 100]); // Initial range values

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     
//   );
// }

// export default RangeSlider;

import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';




const Skills = () => {
    const [value, setValue] = React.useState([ 100]); 

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };  
  return (
    <>
    <div className='w-auto mt-10'>
        <p className='text-[#05C7AE] flex text-center text-3xl justify-center font-bold'>Professional Skills</p>
        <div style={{ width: '300px', margin: '20px' }}>
     <Typography id="range-slider" gutterBottom className='text-white'>
         HTML
       </Typography>
       <Slider
         value={value}
         valueLabelDisplay="range"
         aria-labelledby="range-slider"
         max={100}
       />
     </div>
    </div>
    </>
  )
}

export default Skills
