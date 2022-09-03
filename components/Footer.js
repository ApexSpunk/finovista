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
                        <p>Corpkit is the high-rated Consulting Service Provider with well qualified advisors. No specialized skill is required to work on Corpkit Business Consulting WordPress Theme.</p>
                        <div className='mt-4'>
                            <Socials width={'40px'} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Services</h2>
                    <div>
                        <a href="#">Strategy And Planning</a>
                        <a href="#">Business Analysis</a>
                        <a href="#">Business Analysis</a>
                        <a href="#">Business Analysis</a>
                        <a href="#">Business Analysis</a>
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