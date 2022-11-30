import React from "react";
import { Link } from "react-router-dom";
import DashboardButton from "./buttons/DashboardButton";

interface Props {
  title: any;
}

const SidebarHeader = ({ title }: Props) => {
  return (
    <div className="w-[100%] mt-[1em] flex justify-center items-center">
      <div className="w-[100%] mx-auto flex justify-between items-center">
        <p className="font-bold text-grey text-large">{title}</p>
        <Link to="/dashboard/add-dog">
          <div className="w-[150px]">
            <DashboardButton text="Add a Dog" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarHeader;