import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextWrapper = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUser, setModalUser] = useState("");
  return (
    <ModalContext.Provider
      value={{ isModalOpen, setIsModalOpen, modalUser, setModalUser }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextWrapper;
