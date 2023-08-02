import React from "react";
import ViewsIcon from "../assets/icons/views.svg";

const Card = ({ title, body, views, createdAt, user }) => {
  return (
    <div className="w-full border rounded-xl p-[20px] mb-[20px]">
      <h1 className="text-[28px] font-semibold bg-gradient-to-r from-[#FF8A00] to-[#BD00FF] bg-clip-text text-transparent mb-[9px]">
        {title}
      </h1>
      <p className="text-[17px] text-[#1A1919] mb-[25px]">{body}</p>
      <p className="text-[17px] text-[#1A1919] mb-[10px] font-bold">
        ● {user.username}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-[14px] text-[#949494]">
          {new Date(createdAt).toDateString()}
        </p>
        <div className="text-[14px] text-[#949494] flex items-center">
          <img src={ViewsIcon} alt="" /> <span>{views}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
