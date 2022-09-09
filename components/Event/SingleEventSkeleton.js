import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarAlt, faPlus, faClock } from '@fortawesome/free-solid-svg-icons'

function SingleEventSkeleton() {
    return (
        <div className=''>
            <div className="animate-pulse">
                <div className="">
                    <div class="rounded-t-2xl bg-slate-200 h-[400px] w-full my-auto grid content-center justify-center ">
                        <img src="../img/finovistaLogo.png" alt="" width='150px' className='opacity-25 mt-8' />
                    </div>
                    <div className="flex justify-between content-center  bg-slate-300 h-20 rounded-b-2xl px-[5%]">
                        <div className='grid content-center'>
                            <div class="flex-1 space-y-6 py-8">
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 w-[200px] bg-slate-200 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div classname='bg-slate-300'>
                            <div class="rounded-2xl bg-slate-200 h-10 w-40 mt-[18px]"></div>
                        </div>
                    </div>
                </div>
                <div className='eventTitle mt-8'>
                    <div class="flex-1 space-y-6 py-8">
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 w-[200px] bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>

                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                    <div className="w-24 h-[4px] bg-gray-500 mb-8 mt-2"><div className="w-12 h-[4px] bg-[#2067ff]"></div></div>
                </div>
                <div className="eventPost__content">
                    <div className="eventPost__content__left">
                        <div className="eventPost__content__left__top">
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div class="flex-1 space-y-6 py-8">
                                <div class="h-2 bg-slate-200 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEventSkeleton
