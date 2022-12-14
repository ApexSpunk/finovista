import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt, faPlus, faClock } from '@fortawesome/free-solid-svg-icons'

function SinglePostSkeleton() {
    return (
        <div className=''>
            <div className="animate-pulse">
                <div className="">
                    <div className="rounded-2xl bg-slate-200 h-[400px] w-full my-auto grid content-center justify-center ">
                        <img src="../img/finovistaLogo.png" alt="" width='150px' className='opacity-25 mt-2' />
                    </div>
                </div>
                <div className='eventTitle mt-8'>
                    <div className="flex-1 space-y-6 py-8">
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 w-[200px] bg-slate-200 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>

                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                    <div className="w-24 h-[4px] bg-gray-500 mb-8 mt-2"><div className="w-12 h-[4px] bg-[#2067ff]"></div></div>
                </div>
                <div className="eventPost__content">
                    <div className="eventPost__content__left">
                        <div className="eventPost__content__left__top">
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div className="flex-1 space-y-6 py-8">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePostSkeleton
