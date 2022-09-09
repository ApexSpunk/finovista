import React from 'react'

function EventSkeloton() {
    return (
        <div>
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4 justify-center content-center">
                    <div class="rounded-full bg-slate-200 h-10 w-10 my-auto"></div>
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
                </div>
            </div>
        </div>
    )
}

export default EventSkeloton
