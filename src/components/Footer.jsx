import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


function Footer() {
  return (
    <footer className='bg-[#1d1d1f] text-[#f5f5f7]'>
        <div>
            <div className='pt-[2px] pb-[24px] ml-auto mr-auto w-[980px]'>
                <div className='flex flex-wrap flex-row ml-[-1.5em] mr-[-1.5em]'>
                    <div className='p-[1.5em] w-[25%] max-w-[25%] flex-1/4 text-center'>
                        <a href="https://developer.apple.com/download/" className='w-[216px] ml-auto mr-auto'>
                            <div className='flex justify-center'>
                                <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/download-c-i.svg" alt="" className='w-[50px] h-[50px]'/>
                            </div>
                            <p className='font-semibold mt-2'>Download</p>
                            <p className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[13px] '>Get the latest SDKs and beta operating systems for all Apple platforms.</p>
                            <div className='flex items-center justify-center mt-[0.8em] text-[14px] text-[#06c]'>
                                <p className='font-nomal leading-tight tracking-wide  hover:underline'>Download resources</p>
                                <IoIosArrowForward className='text-[16px] pl-[0.3em]'/>
                            </div>
                        </a>
                    </div>

                    <div className='p-[1.5em] w-[25%] max-w-[25%] flex-1/4 text-center'>
                        <a href="https://developer.apple.com/documentation/" className='w-[216px] ml-auto mr-auto'>
                            <div className='flex justify-center'>
                                <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/documentation-c-i.svg" alt="" className='w-[50px] h-[50px]'/>
                            </div>
                            <p className='font-semibold mt-2'>Documentation</p>
                            <p className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[13px] '>Browse the latest documentation including API reference, articles, and sample code..</p>
                            <div className='flex items-center justify-center mt-[0.8em] text-[#06c]'>
                                <p className='font-nomal leading-tight tracking-wide text-[14px]  hover:underline'>Read documentation</p>
                                <IoIosArrowForward className='text-[16px] pl-[0.3em]'/>
                            </div>
                        </a>
                    </div>

                    <div className='p-[1.5em] w-[25%] max-w-[25%] flex-1/4 text-center'>
                        <a href="https://developer.apple.com/videos/" className='w-[216px] ml-auto mr-auto'>
                            <div className='flex justify-center'>
                                <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/play-c-i.svg" alt="" className='w-[50px] h-[50px]'/>
                            </div>
                            <p className='font-semibold mt-2'>Videos</p>
                            <p className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[13px] '>Learn about the latest technologies presented at Apple developer events.</p>
                            <div className='flex items-center justify-center mt-[0.8em] text-[#06c]'>
                                <p className='font-nomal leading-tight tracking-wide text-[14px]  hover:underline'>Watch videos</p>
                                <IoIosArrowForward className='text-[16px] pl-[0.3em]'/>
                            </div>
                        </a>
                    </div>

                    <div className='p-[1.5em] w-[25%] max-w-[25%] flex-1/4 text-center'>
                        <a href="https://developer.apple.com/forums/" className='w-[216px] ml-auto mr-auto'>
                            <div className='flex justify-center'>
                                <img src="https://developer.apple.com/assets/elements/icons/wwdr-unified/forum-c-i.svg" alt="" className='w-[50px] h-[50px]'/>
                            </div>
                            <p className='font-semibold mt-2'>Forums</p>
                            <p className='font-nomal mt-[0.4em] leading-tight tracking-wide text-[13px] '>Ask questions and discuss development topics with Apple engineers and other developers.</p>
                            <div className='flex items-center justify-center mt-[0.8em] text-[#06c]'>
                                <p className='font-nomal leading-tight tracking-wide text-[14px]  hover:underline'>View forums</p>
                                <IoIosArrowForward className='text-[16px] pl-[0.3em]'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className='min-w-[1024px] overflow-hidden relative z-10'>
            <div className='pl-[calc(max(22px, env(safe-area-inset-left)))] pr-[calc(max(22px, env(safe-area-inset-right)))] max-w-[980px] px-[22px] mx-auto'>
                <nav className='pt-[20px] border-t border-[#424245] font-nomal mt-[0.4em] leading-tight tracking-wide text-[12px] flex justify-between'>
                    <div className='flex flex-col'>
                        <div className='mb-5'>
                            <h3 className='font-semibold mb-[0.8em]'>Platforms</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/ios/">iOS</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/ipados/">ipadOS</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/macos/">macOS</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/tvos/">tvOS</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/visionos/">visionOS</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/watchos/">watchOS</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold mb-[0.8em]'>Tools</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/swift/">Swift</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/xcode/swiftui/">SwiftUI</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/swift-playgrounds/">Swift Playgrounds</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/testflight/">TestFlight</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/xcode/">Xcode</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/xcode-cloud/">Xcode Cloud</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/sf-symbols/">SF Symbols</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className='flex flex-col '>
                        <div className='mb-5'>
                            <h3 className='font-semibold mb-[0.8em]'>Topics & Technologies</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/accessibility/">Accessibility</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/accessories/">Accessories</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/app-extensions/">App Extensions</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/app-store/">App Store</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/audio/">Audio & Video</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/augmented-reality/">Augmented Reality</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/business/">Business</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/design/">Design</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/distribute/">Distribution</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/education/">Education</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/fonts/">Fonts</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/games/">Games</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/health-fitness/">Health & Fitness</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/in-app-purchase/">In-App Purchase</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/localization/">Localization</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/maps/">Maps & Location</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/machine-learning/">Machine Learning</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://opensource.apple.com/">Open Source</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/security/">Security</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/safari/">Safari & Web</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='mb-5'>
                            <h3 className='font-semibold mb-[0.8em]'>Resources</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/documentation/">Documentation</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/learn/">Curriculum</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/download/">Downloads</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/forums/">Forums</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/videos/">Videos</a>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-5'>
                            <h3 className='font-semibold mb-[0.8em]'>Account</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/account/">Apple Developer</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://appstoreconnect.apple.com/">App Store Connect</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/account/ios/certificate/">Certificates, IDs, & Profiles</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://feedbackassistant.apple.com/">Feedback Assistant</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='font-semibold mb-[0.8em]'>Support</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/support/articles/">Support Articles</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/contact/">Contact Us</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/bug-reporting/">Bug Reporting</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/system-status/">System Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='mb-5'>
                            <h3 className='font-semibold mb-[0.8em]'>Programs</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/programs/">Apple Developer Program</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/programs/enterprise/">Apple Developer Enterprise Program</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/app-store/small-business-program/">App Store Small Business Program</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://mfi.apple.com/">MFi Program</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/apple-news/program/">News Partner Program</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/programs/video-partner/">Video Partner Program</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/security-bounty/">Security Bounty Program</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/programs/security-research-device/">Security Research Device Program</a>
                                </li>
                            </ul>
                        </div>

                        <div className='mb-5'>
                            <h3 className='font-semibold mb-[0.8em]'>Events</h3>
                            <ul className='text-[#a1a1a6]'>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/events/">Meet with Apple Experts</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/accelerator/">App Accelerators</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/app-store/app-store-awards/">App Store Awards</a>
                                </li>

                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/design/awards/">Apple Design Awards</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/learn/experts/#academies">Apple Developer Academies</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/entrepreneur-camp/">Entrepreneur Camp</a>
                                </li>
                                <li className='mb-[0.8em] hover:underline hover:text-white'>
                                    <a href="https://developer.apple.com/wwdc23/">WWDC</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className='pt-[34px] pb-[calc(max(22px, env(safe-area-inset-bottom)))]'>
                    <div className='mb-[7px] pb-[8px] border-b border-[#6e6e73] flex items-end justify-between max-h-[9999px]'>
                        <div className='flex'>
                            <h2 className='font-normal mt-[0.4em] leading-tight tracking-wide text-[12px] text-[#6e6e73] mr-2'>Get The</h2>
                            <a href="https://apps.apple.com/us/app/apple-developer/id640199958" className='font-normal mt-[0.4em] leading-tight tracking-wide text-[12px] text-[#2997ff] hover:underline'>Apple Developer app.</a>
                        </div>
                    </div>

                    <div className='relative top-[-3px]'>
                        <div className='max-h-[9999px] mr-[30px] float-left mt-[5px] font-normal leading-tight tracking-wide text-[12px] text-[#6e6e73] flex'>
                            <p className=''>Copyright ©  2024 </p>
                            <a href="https://www.apple.com/" className='text-[#a1a1a6] mx-1'>Apple Inc.</a>
                            <p> All rights reserved.</p>
                        </div>

                        <div className='max-h-[9999px] mr-[30px] float-left mt-[5px] font-normal leading-tight tracking-wide text-[12px] text-[#a1a1a6] flex'>
                           <a href="https://www.apple.com/legal/internet-services/terms/site.html" className='border-r border-[#6e6e73] mr-[7px] pr-[10px]'>Terms of Use</a>
                           <a href="https://www.apple.com/legal/privacy/" className='border-r border-[#6e6e73] mr-[7px] pr-[10px]'>Privacy Policy</a>
                           <a href="https://developer.apple.com/support/terms/" className=' mr-[7px] pr-[10px]'>Agreements and Guidelines</a>
                        </div>
                       
                        
                    </div>
                </section>
            </div>
        </div>
    </footer>
  )
}

export default Footer