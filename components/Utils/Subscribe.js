import React from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Subscribe(props) {
    const { align } = props
    const [email, setEmail] = React.useState('')
    
    const subscribe = async () => {
        const res = await fetch('/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, addedBy: "Finovista/Newsletter" })
        })
        const data = await res.json()
        if (data.success) {
            setEmail('')
            toast.success('Thank you for subscribing!');
        } else {
            toast.error(data.message);
        }
    }




    return (
        <div>
            <h2>Subscribe Us</h2>
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={"w-24 h-[3px] bg-gray-500 mb-8 mx-" + align}><div className="w-12 h-[3px] bg-[#2067ff]"></div></div>
            <div>
                <p>Get each and every latest news & update about Finovista without any delay by subscribing to us.</p>
                <div className='mt-6'>
                    <input type="text" className='p-3 border-none rounded-l-lg outline-none' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className='p-3 border-none rounded-r-lg font-semibold bg-pink-600 text-white cursor-pointer' onClick={subscribe}>
                    SIGNUP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe