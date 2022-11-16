import React from 'react'

function Subscribe(props) {
    const { align } = props
    const [email, setEmail] = React.useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const response 

    return (
        <div>
            <h2>Subscribe Us</h2>
            <div className={"w-24 h-[3px] bg-gray-500 mb-8 mx-" + align}><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
            <div>
                <p>Get each and every latest news & update about Finovista without any delay by subscribing to us.</p>
                <div className='mt-6'>
                    <input type="text" className='p-3 border-none rounded-l-lg outline-none' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className='p-3 border-none rounded-r-lg font-semibold bg-pink-600 text-white cursor-pointer'>SIGNUP</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe