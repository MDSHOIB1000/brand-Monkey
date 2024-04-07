import React from 'react'

function ProgressChart({ chartData }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {chartData?.map((items, i) => {
                return <div className="text-white rounded-3xl px-6 py-2 bg-gradient-to-r from-[#4745457b] to-[#201f2159] border-lime-500" key={i}>
                    <h2 className="text-center text-xl">{items?.title}</h2>
                    <div className=" flex justify-between">
                        <div className="md-block w-40 h-40 rounded-full border-[18px] border-gray-500 flex justify-center items-center">
                            <span className="text-4xl font-semibold">100</span>
                        </div>
                        <div className="block">
                            {items?.nestedData?.map((nestedItem, i) => {
                                return <div className="flex pl-2">
                                    <div>
                                        <p className="text-sm pl-2">{nestedItem?.text}</p>
                                        <h3 className="border-l-4 rounded pl-2 border-bgColor text-xl">
                                            {nestedItem?.count}
                                        </h3>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ProgressChart
