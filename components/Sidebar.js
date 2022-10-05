import React from 'react'
import Socials from './Socials'
import Subscribe from './Subscribe'
import LatestPosts from './LatestPosts'

function Sidebar() {
  return (
    <div className='mt-4'>
      <div className='hidden md:block'>
        <h2>Follow Us</h2>
        <div className="w-24 h-[3px] bg-gray-500 mb-8"><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
        <div className=''>
          <Socials width={'60px'} />
        </div>
      </div>
      <div>
        <div className='p-8 bg-pink-200 rounded-2xl mt-8 text-center'>
          <Subscribe align={'auto'} />
        </div>
      </div>
      <div>
        <div className='p-8 bg-gray-50 rounded-2xl mt-8'>
        <h2>Latest Posts</h2>
        <div className="w-24 h-[3px] bg-gray-500 mb-8"><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
        <LatestPosts posts={3} type={'sidebar'} />
        <LatestPosts posts={3} type={'sidebar'} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar