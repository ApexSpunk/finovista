import React from 'react'

function IndustrySkeleton() {
    return (
        <>
            {
                [...Array(6)].map((item, index) => <div key={index} className="border border-blue-300 shadow rounded-md px-8 py-10 w-full mx-auto">
                    <div className="animate-pulse flex space-x-4 justify-center content-center">
                        <div className="rounded-full bg-slate-200 h-10 w-10 my-auto"></div>
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
                    </div>
                </div>
                )
            }
        </>
    )
}

export default IndustrySkeleton
