import React from 'react'
import Socials from './Socials'
import LatestPosts from './LatestPosts'
import Subscribe from './Subscribe'

function Footer() {
    return (
        <div className='site-footer'>
            <div className='footer-middle-wrap'>
                <div>
                    <h2>About Us</h2>
                    <div>
                        <p>Finovista, is a Program Management Consulting, IN Country Partner, Technology Management & Capacity Building firm engaged extensively with Developmental Agencies, Government Bodies.</p>
                        <div className='mt-4'>
                            <Socials width={'40px'} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Services</h2>
                    <div>
                        <a href="#">Services</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">BLogs And Stories</a>
                        <a href="#">Job Opporunity</a>
                        <a href="#">Business Analysis</a>
                    </div>
                </div>
                <div>
                    <h2>Latest Posts</h2>
                    <div>
                        <LatestPosts posts={3} type={'sidebar'} />
                    </div>
                </div>
                <div>
                    <Subscribe />
                </div>
            </div>
            <div className='footer-bottom'>
                <div>
                    <a href="/"><img src="../img/finovistaLogo.png" alt="" className='filter brightness-0 invert' /></a>
                    <p>Copyrights © 2022 <span className=' text-blue-400'>Finovista.</span> All Right Reserved <span className=' text-blue-400'>♥</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer