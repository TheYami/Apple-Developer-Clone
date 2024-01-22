import React from 'react'

function Banner() {
  return (
    <header className='bg-[#F5F5F7] overflow-hidden text-center pb-20'>
      <a href="https://developer.apple.com/visionos/submit/"> 
        <div className='mt-10 tracking-tighter leading-tight'>
            <h1 className='text-[56px] font-semibold'>Ready,Set,Submit.</h1>
            <h2 className='text-[27px]'>Learn how to prepare and submit your apps to the <br/>App Store for Apple Vission Pro</h2>
            <div className='flex justify-center items-center mt-24'>
                <img className='w-[750px]' src="https://developer.apple.com/home/images/tile-visionos-labs/vision-side_2x.webp" alt="" />
            </div>
        </div>
      </a>
    </header>
  )
}

export default Banner