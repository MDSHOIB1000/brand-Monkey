import React from 'react'
import profileLogo from "../../assets/images/userImage.svg";

function Profile() {
    return (
        <div className="flex justify-end">
            <div className="flex gap-4 text-white items-center py-2 bg-gradient-to-r from-[#979292b6] to-[#201f2159] rounded-3xl px-4 justify-end max-w-[240px]">
                <div>
                    <img src={profileLogo} alt="not found" className="w-12" />
                </div>
                <div className="text-center">
                    <h2>Sourav Kumar</h2>
                    <p>(Designer)</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
