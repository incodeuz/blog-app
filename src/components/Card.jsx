import React, { useContext } from "react";
import ViewsIcon from "../assets/icons/views.svg";
import { Link } from "react-router-dom";
import { ModalContext } from "../context/modalContext";

const Card = ({ title, body, views, createdAt, user, id }) => {
  const { isModalOpen, setIsModalOpen, modalUser, setModalUser } =
    useContext(ModalContext);
  const openModal = (id) => {
    setModalUser(id);
    setIsModalOpen(true);
  };
  return (
    <div className="w-full border rounded-xl p-[20px] mb-[20px] hover:border-gray-500">
      <Link className="w-fit" to={`/details/${id}`}>
        <h1
          id="text"
          className="w-fit cursor-pointer hover:border-b-1 text-[28px] font-semibold bg-gradient-to-r from-[#FF8A00] to-[#BD00FF] bg-clip-text text-transparent mb-[9px]"
        >
          {title}
        </h1>
      </Link>
      <p className="text-[17px] text-[#1A1919] mb-[25px]">
        {body.length > 250 ? body.slice(0, 250) + "..." : body}
      </p>
      <p
        onClick={() => openModal(user.id)}
        className="w-fit text-[17px] text-[#1A1919] mb-[10px] font-bold hover:underline cursor-pointer"
      >
        ● {user.id === localStorage.getItem("my_id") ? "You" : user.username}
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
