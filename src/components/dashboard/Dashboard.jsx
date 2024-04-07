import React, { useState } from "react";
import client from "../../assets/images/client.svg";
import editIcon from "../../assets/images/editIcon.svg";
import work from "../../assets/images/work.png";
import checkbox from "../../assets/images/checkbox.svg";

import Profile from "../profile/Profile";
import Cards from "./cards/Cards";
import ProgressChart from "./progressChart/ProgressChart";
const cardObj = [
  { id: "1", cardName: "My Clients (05)", src: client },
  { id: "2", cardName: "Raised Complaints", src: editIcon },
  { id: "3", cardName: "Work Completed", src: work },
  { id: "4", cardName: "Work Pending", src: checkbox },
];
const chartData = [
  {
    id: "1", title: "Total Tickets Raised",
    id: "2", nestedData: [
      { id: '1', text: "Solved Tickets ", count: 50 },
      { id: '2', text: "In Progress", count: 45 },
      { id: '3', text: "Pending", count: 5 },
    ]
  },
  {
    id: "3", title: "Work Progress",
    id: "4", nestedData: [
      { id: '1', text: "Work Completed ", count: 50 },
      { id: '2', text: "Work Pending", count: 45 },
    ]
  },
]
const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <Profile />
      <Cards cardObj={cardObj} onChange={onChange} data={date} />
      <ProgressChart chartData={chartData} />
    </div>
  );
};

export default Dashboard;
