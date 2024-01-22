import React from 'react'
import { FaApple } from "react-icons/fa6";
function Promo() {
  return (
    <div className='bg-[rgba(0,0,0,0.92)]'>
        <ul className='flex flex-wrap'>
            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid mt-[3px]'>
                    <a href="https://developer.apple.com/news/?id=8fppguuh&cid=hello-developer-ht">
                        <div className="bg-[url('https://developer.apple.com/home/images/tile-hello-developer/jan24-rthf/hello-dev-jan24-large_2x.jpg')] h-full bg-cover bg-center text-center">
                            <h3 className='text-[40px] leading-none tracking-normal font-semibold pt-[52px] text-[#333]'>Hello Developer</h3>
                             <p className='text-[21px] font-normal leading-tight tracking-wide pt-[4px] text-[#333]'>The first edition of 2024 is all about<br/>Apple Vision Pro</p>
                        </div>
                    </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid mt-[3px]'>
                    <a href="https://developer.apple.com/events/">
                        <div className="bg-[url('https://developer.apple.com/home/images/tile-events-promo/events-coding-large_2x.jpg')] h-full bg-cover bg-center text-center">
                            <h3 className='text-[40px] leading-none tracking-normal font-semibold pt-[52px] text-[#333]'>Meet With Apple Experts</h3>
                             <p className='text-[21px] font-normal leading-tight tracking-wide pt-[4px] text-[#333]'>Explore worldwide activities.</p>
                        </div>
                    </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid '>
                    <a href="https://developer.apple.com/app-store/app-store-awards-2023/">
                        <div className="bg-[url('https://developer.apple.com/home/images/tile-event-asa-2023/w-large_2x.jpg?2')] h-full bg-cover bg-center text-center">
                            <h3 className='pt-[52px] text-[#f5f5f7]'>
                                <FaApple className='text-4xl absolute left-[188px] mt-[2px]'/>
                                <span className='text-[40px] leading-none tracking-normal font-semibold'>App Store Awards</span>
                            </h3>
                             <p className='text-[21px] font-normal leading-tight tracking-wide pt-[4px] text-[#f5f5f7]'>2023</p>
                        </div>
                    </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid '>
                    <a href="https://developer.apple.com/swift-student-challenge/?cid=ssc-ht">
                        <div className="bg-[url('https://developer.apple.com/home/images/tile-ssc/large_2x.png?2')] h-full bg-cover bg-center text-center">
                            <h3 className='text-[40px] leading-none tracking-normal font-semibold pt-[52px] text-[#f5f5f7]'>Swift Students Challenge</h3>
                             <p className='text-[21px] font-normal leading-tight tracking-wide pt-[4px] text-[#f5f5f7]'>The future is yours to crate.</p>
                        </div>
                    </a>
            </li>

            

            
        </ul>
    </div>
  )
}

export default Promo