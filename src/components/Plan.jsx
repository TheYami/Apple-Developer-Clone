import React from 'react'

function Plan() {
  return (
    <div className='text-[#f5f5f7] bg-gradient-to-b from-[#2e3e58] to-[#21283c]'>
        <div className='w-[980px] mx-auto'>
            <div className='p-[1.5em] text-center '>
                <h2 className='text-[40px] font-semibold leading-none tracking-normal'>New to Apple platforms?</h2>
                <p className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[19px]'>Get familiar with the tools and technologies you’ll use to build apps and games. The <br/>Apple development ecosystem provides everything you need to bring incredible <br/>experiences to people around the world.</p>
            
                <ul className='flex justify-center items-center mt-[20px] '>
                    <li className='px-[9px]'>
                        <a href="https://developer.apple.com/ios/planning/">
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-ios-i.svg" alt="" />
                            <span className='text-[17px] block'>iOS</span>
                        </a>
                    </li>

                    <li className='px-[9px]'>
                        <a href="https://developer.apple.com/ipados/planning/">
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-ipados-i.svg" alt="" />
                            <span className='text-[17px] block'>ipadOS</span>
                        </a>
                    </li>

                    <li className='px-[9px]'>
                        <a href="https://developer.apple.com/macos/planning/">
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-macos-i.svg" alt="" />
                            <span className='text-[17px] block'>macOS</span>
                        </a>
                    </li>

                    <li className='px-[9px]'>
                        <a href="https://developer.apple.com/tvos/planning/">
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-tvos-i.svg" alt="" />
                            <span className='text-[17px] block'>tvOS</span>
                        </a>
                    </li>

                    <li className='px-[9px]'>
                        <a href="https://developer.apple.com/visionos/planning/">
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-visionos-i.svg" alt="" />
                            <span className='text-[17px] block'>visionOS</span>
                        </a>
                    </li>

                    <li className='px-[9px]'>
                        <a href="https://developer.apple.com/watchos/planning/">
                            <img src="https://developer.apple.com/assets/elements/icons/platforms/icon-watchos-i.svg" alt="" />
                            <span className='text-[17px] block'>watchOS</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Plan