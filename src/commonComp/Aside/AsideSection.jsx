import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { AiOutlineLogout } from "react-icons/ai";
import { IoBackspaceOutline } from "react-icons/io5";
import logo from "../../assets/images/monkeylogo.svg";
import profilePic from "../../assets/images/userImage.svg";


const menusData = [
  { menu: "Dashboard", icon: <MdDashboard /> },
  { menu: "My Client", icon: <FaRegAddressCard /> },
  { menu: "Raised Complaint", icon: <FaEdit /> },
  { menu: "Resolved Complaint", icon: <IoIosCheckmarkCircle /> },
  { menu: "Working Pending", icon: <HiOutlineNewspaper /> },
  { menu: "Logout", icon: <AiOutlineLogout /> },
];

const AsideSection = ({ handleClick, isFixedWidth }) => {
  const [isActive, setIsActive] = useState(true)
  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="image not found" />
      </div>
      {!isFixedWidth && (
        <>
          <div className="flex justify-end mr-4 text-3xl">
            <IoBackspaceOutline onClick={handleClick} />
          </div>
          <div className="flex flex-col items-center">
            <img src={profilePic} alt="image not found" />
            <h2 className="text-xl font-semibold">Sourav Kumar</h2>
            <p className="text-md mb-4 font-semibold">( Designer )</p>
          </div>
          <div>
            <ul>
              {menusData.map((item, index) => (
                <li key={index} className="px-5 py-1 whitespace-nowrap ">
                  <div className="flex items-center gap-4 my-2 py-4 px-8 ">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="fontmal text-lg">{item.menu}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
      }
    </div>
  );
};

export default AsideSection;

