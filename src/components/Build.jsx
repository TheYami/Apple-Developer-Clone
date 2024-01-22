import React from 'react'

function Build() {
  return (
    <div >
        <div className='border-y-[6px] border-black active:border-[#06c] bg-gradient-to-b from-[#00172b] to-[#0F71C3] overflow-hidden'>
            <a href="https://developer.apple.com/learn/">
                <div className='text-center text-[#f5f5f7] mt-11'>
                    <h2 className='text-[40px] font-semibold leading-none tracking-normal'>Build apps. Build your future.</h2>
                    <h5 className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[19px] '>Whether you’re just entering the workforce or you‘re an experienced <br/>
                        developer or entrepreneur, take advantage of free resources to gain <br/>
                        skills that help you succeed in Apple’s growing app economy, which <br/>
                        provides millions of jobs in technology across the globe.</h5>
                    <div>
                        <img src="https://developer.apple.com/home/images/hero-build-apps/build-apps_2x.png" alt="" className='max-w-[100%] h-[376px]'/>
                    </div>
                </div>
            </a>
        </div>

        <div className='bg-gradient-to-br from-[#bf46a5] to-[#341d8c] border-y-[6px] border-black active:border-[#06c]'>
            <a href="https://developer.apple.com/programs/">
                <div className='text-center text-[#f5f5f7] my-16'>
                    <div className='flex justify-center mb-4'>
                        <img src="https://developer.apple.com/app-store/features/images/members.svg" alt="" className='w-[144px]'/>
                    </div>
                    <h2 className='text-[40px] font-semibold leading-none tracking-normal mb-2'>Apple Developer Program</h2>
                    <h5 className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[19px] '>Join the Apple Developer Program to reach customers around the 
                        <br/>world on the App Store for iPhone, iPad, Mac, Apple TV, and 
                        <br/>Apple Watch. You’ll also get access to beta software, advanced app 
                        <br/>capabilities, extensive beta testing tools, and app analytics.
                    </h5>
                </div>
            </a>
        </div>
    </div>
    
  )
}

export default Build