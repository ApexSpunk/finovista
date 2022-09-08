import React from 'react'
import { useState } from 'react'
import ImageUploader from './ImageUploader';

function AddMedia(props) {
    const { handleClick, showModal } = props
    return (
        <div>
            <div className='mt-44'>
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none overflow-scroll bg-opacity-40 bg-black">
                            <div className="relative w-auto my-6 h-[90vh] mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Add Media
                                        </h3>
                                        <button
                                            className="bg-transparent border-0 text-black opacity-50 float-right text-4xl leading-none font-semibold outline-none focus:outline-none cursor-pointer"
                                            onClick={handleClick}
                                        >
                                            <span className="bg-transparent text-black opacity-50 h-10 w-10 text-4xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto w-full border-t border-solid border-slate-200 rounded-b">
                                        <div>
                                            <ImageUploader />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default AddMedia
