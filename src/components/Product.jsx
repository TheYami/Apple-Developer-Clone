import React from 'react'

function Product() {
  return (
    <div className='bg-[rgba(0,0,0,0.92)]'>
        <ul className='flex flex-wrap'>
            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid'>
                <a href="https://developer.apple.com/visionos/">
                    <div>
                        <h4 className='text-[40px] font-semibold text-center text-[#f5f5f7]  mt-[52px]'>visionOS</h4>
                    </div>
                    <div className='w-full flex justify-center mt-[75px]'>
                        <img src="https://developer.apple.com/home/images/tile-vision-dev/vision-home-large_2x.png?1" alt="" className='w-[440px] h-[257px]'/>
                    </div>
                </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid'>
                <a href="https://developer.apple.com/ios/">
                    <div>
                        <h4 className='text-[40px] font-semibold text-center text-[#f5f5f7]  mt-[52px]'>iOS 17</h4>
                    </div>
                    <div className='w-full flex justify-center mt-[75px]'>
                        <img src="https://developer.apple.com/home/images/tile-ios-17/ios-17-large_2x.png?1" alt="" className='w-[165px] h-[330px] object-contains'/>
                    </div>
                </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid'>
                <a href="https://developer.apple.com/ipados/">
                    <div>
                        <h4 className='text-[40px] font-semibold text-center text-[#f5f5f7]  mt-[52px]'>ipadOS 17</h4>
                    </div>
                    <div className='w-full flex justify-center mt-[75px]'>
                        <img src="https://developer.apple.com/home/images/tile-ipados-17/ipados-17-b-large_2x.png?1" alt="" className='w-[439px] h-[318px]'/>
                    </div>
                </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid'>
                <a href="https://developer.apple.com/macos/">
                    <div>
                        <h4 className='text-[40px] font-semibold text-center text-[#f5f5f7]  mt-[52px]'>macOS Sonoma</h4>
                    </div>
                    <div className='w-full flex justify-center mt-[75px]'>
                        <img src="https://developer.apple.com/home/images/tile-macos-14/macos-14-c-large_2x.png" alt="" className='w-[576px] h-[336px]'/>
                    </div>
                </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid'>
                <a href="https://developer.apple.com/watchos/">
                    <div>
                        <h4 className='text-[40px] font-semibold text-center text-[#f5f5f7]  mt-[52px]'>watchOS 10</h4>
                    </div>
                    <div className='w-full flex justify-center mt-[75px]'>
                        <img src="https://developer.apple.com/home/images/tile-watchos-10/watchos-10-large_2x.png?1" alt="" className='w-[191px] h-[319px]'/>
                    </div>
                </a>
            </li>

            <li className='w-[50%] h-[592px] border-[6px] border-[#000] border-solid'>
                <a href="https://developer.apple.com/tvos/">
                    <div>
                        <h4 className='text-[40px] font-semibold text-center text-[#f5f5f7]  mt-[52px]'>tvOS 17</h4>
                    </div>
                    <div className='w-full flex justify-center mt-[75px]'>
                        <img src="https://developer.apple.com/home/images/tile-tvos/tvos-device-b_2x.png" alt="" className='w-[500px] h-[279px]'/>
                    </div>
                </a>
            </li>
        </ul>
        </div>
  )
}

export default Product