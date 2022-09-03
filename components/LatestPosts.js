import React from 'react'

function LatestPosts(props) {
    const { posts, type } = props
    return (
        <div className='latestPosts'>
            <div>
                <img src="https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2019/04/6-1-100x100.jpg" alt="" width='100%' />
                <div>
                    <h4>5 Effective Ways Demo Post Testing</h4>
                    <span>April 19, 2022</span>
                </div>
            </div>
            <div>
                <img src="https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2019/04/6-1-100x100.jpg" alt="" width='100%' />
                <div>
                    <h4>5 Effective Ways Demo Post Testing</h4>
                    <span>April 19, 2022</span>
                </div>
            </div>
        </div>
    )
}

export default LatestPosts