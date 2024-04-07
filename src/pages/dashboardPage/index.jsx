import React, { useState } from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import AsideSection from "../../commonComp/Aside/AsideSection";
import { CiCircleChevRight } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa6";
const menusIcon = [
  { uid: "6", icon: <IoIosArrowDropright /> },
  { uid: "1", icon: <MdDashboard /> },
  { uid: "2", icon: <FaRegAddressCard /> },
  { uid: "3", icon: <FaEdit /> },
  { uid: "4", icon: <IoIosCheckmarkCircle /> },
  { uid: "5", icon: <HiOutlineNewspaper /> },
]
const DashboardPage = () => {
  const [isFixedWidth, setIsFixedWidth] = useState(false);

  const handleClick = () => {
    setIsFixedWidth(!isFixedWidth);
  };

  return (
    <div className="relative">
      {isFixedWidth && (
        <div className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-500">
          <div className="rounded-r-full bg-monkeyColor text-white">
            <ul className="px-5 py-20">
              {menusIcon?.map((itm, i) => (
                <li key={i} className="font-medium text-2xl my-4" onClick={itm?.uid === '6' ? handleClick : null}>
                  {itm?.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="bg-bgColor w-full h-full">
        <div className="w-full flex">
          <div className={`${isFixedWidth && "w-36"}transition-all duration-500`}>
            <AsideSection handleClick={handleClick} isFixedWidth={isFixedWidth} />
          </div>
          <div className={`w-full bg-monkeyColor  px-8 py-5 rounded-tl-[50px] rounded-bl-[50px] ${isFixedWidth && "px-20"}`}>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
