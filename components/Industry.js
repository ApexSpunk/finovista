import React from 'react'

function Industry() {
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-blue-700 mt-2'>\ Industry \</p>
                <p className='text-3xl mt-4 font-semibold'>Industries We Cater</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                    <img src='https://www.ledgerinsights.com/wp-content/uploads/2020/02/esg-environmental-social-governance.jpg' alt='' className='w-full h-64 object-cover' />
                    <p className='text-xl font-semibold mt-4'>Environmental, Social & Governance</p>
                </div>
                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                    <img src='https://www.esmap.org/sites/default/files/styles/news_page_detail_753_348_/public/impact/articles/woman-cooking_wb_760x351_0.jpg?itok=yqLDygRC' alt='' className='w-full h-64 object-cover' />
                    <p className='text-xl font-semibold mt-4'>Clean Cooking</p>
                </div>
                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                    <img src='https://d346xxcyottdqx.cloudfront.net/wp-content/uploads/2022/05/119793083_l-2.jpg' alt='' className='w-full h-64 object-cover' />
                    <p className='text-xl font-semibold mt-4'>Energy Storage</p>
                </div>
                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                    <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Cybersecurity_Projects.jpg' alt='' className='w-full h-64 object-cover' />
                    <p className='text-xl font-semibold mt-4'>Cyber Security</p>
                </div>
                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                    <img src='https://images.squarespace-cdn.com/content/v1/59c143fcedaed8a4fffaf4a8/1587482603331-AOEFZV6XXUZGHY4GT6BE/AdobeStock_237118925.jpeg?format=1000w' alt='' className='w-full h-64 object-cover' />
                    <p className='text-xl font-semibold mt-4'>Future Manufacturing</p>
                </div>
                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                    <img src='https://www.esma.europa.eu/sites/default/files/styles/esma_page_main_image/public/main_image/2021/istock-921527422.jpg?itok=avLbehuK' alt='' className='w-full h-64 object-cover' />
                    <p className='text-xl font-semibold mt-4'>Sustainable Finance</p>
                </div>
            </div>
        </div>
    )
}

export default Industry