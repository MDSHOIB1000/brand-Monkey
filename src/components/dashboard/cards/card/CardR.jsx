import React from 'react'
import { LiaFileSignatureSolid } from 'react-icons/lia'
import Calendar from "react-calendar";
import "../../../../assets/style/style.css"
function CardR({onChange,date}) {
    return (
        <div className="w-full lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
            <div className="text-white border border-[#ffff006a] rounded-3xl p-6 bg-gradient-to-r from-[#4745457b] to-[#201f2159] mb-6">
                <div className="flex items-center text-bgColor gap-2">
                    <LiaFileSignatureSolid className="text-lg" />
                    <h2 className="font-semibold">Notes</h2>
                </div>
                <div className="bg-paraColor rounded-3xl py-4 pl-4 font-semibold text-black opacity-80 my-3">
                    <p className="text-[13px] leading-5">
                        1. Meeting with Client A - 9:00 AM to.. <br /> 2. Follow-up call with Prospect B - 11:30 AM <br /> to.. <br /> 3. Proposal preparation for Client C
                    </p>
                </div>
                <div>
                    <button className="border border-bgColor px-4 text-gray-200 text-xs rounded-full">
                        Add note &nbsp; &nbsp;
                        <span className="text-bgColor text-sm font-bold">+</span>
                    </button>
                </div>
            </div>
            <div className="border border-[#ffff006a] rounded-3xl p-6 bg-gradient-to-r from-[#4745457b] to-[#201f2159]">
                <Calendar className="w-full" onChange={onChange} value={date} />
            </div>
        </div>
    )
}

export default CardR
