import React from 'react'
import Socials from './Socials'
import LatestPosts from './LatestPosts'
import Subscribe from './Subscribe'

function Footer() {
    return (
        <div className='site-footer'>
            <div className='footer-middle-wrap footer-middle-wrap grid grid-cols-8 mx-[5%] xl:mx-[10%] gap-8'>
                <div className='col-span-8 md:col-span-3 lg:col-span-2'>
                    <h2>About Us</h2>
                    <div className="w-24 h-[3px] bg-gray-500 mb-8"><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
                    <div>
                        <p>Finovista, is a Program Management Consulting, IN Country Partner, Technology Management & Capacity Building firm engaged extensively with Developmental Agencies, Government Bodies.</p>
                        <div className='mt-4'>
                            <Socials width={'40px'} />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-2 hidden md:block'>
                    <h2>Services</h2>
                    <div className="w-24 h-[3px] bg-gray-500 mb-8"><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
                    <div>
                        <a href="#">Services</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">BLogs And Stories</a>
                        <a href="#">Job Opporunity</a>
                        <a href="#">Business Analysis</a>
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-2 hidden lg:block'>
                    <h2>Latest Posts</h2>
                    <div className="w-24 h-[3px] bg-gray-500 mb-8"><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
                    <div>
                        <LatestPosts posts={3} type={'footer'} />
                    </div>
                </div>
                <div className='hidden md:block col-span-3 lg:col-span-2'>
                    <Subscribe />
                </div>
            </div>
            <div className='footer-bottom text-center'>
                <div className='grid grid-cols-1 md:flex mx-[5%] xl:mx-[10%]'>
                    <a href="/"><img src="../img/finovistaLogo.png" alt="" className='filter brightness-0 invert mx-0 md:my-5' /></a>
                    <p>Copyrights © 2022 <span className=' text-blue-400'>Finovista.</span> All Right Reserved <span className=' text-blue-400'>♥</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;