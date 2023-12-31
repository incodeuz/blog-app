import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/icons/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal, Popconfirm, Tabs, message } from "antd";
import { ModalContext } from "../context/modalContext";

const Navbar = () => {
  const { isModalOpen, setIsModalOpen, modalUser, setModalUser } =
    useContext(ModalContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [me, setMe] = useState();

  async function fetcher() {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/user/${modalUser}`
    );
    const data = await res.json();
    setMe(data);
  }

  const showModal = () => {
    setModalUser(localStorage.getItem("my_id"));
    setIsModalOpen(true);
    fetcher();
  };

  useEffect(() => {
    fetcher();
  }, [modalUser]);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const confirm = (e) => {
    handleCancel();
    localStorage.clear();
  };
  const onCloseModal = () => {
    handleCancel();
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };
  return (
    <>
      <Modal
        className="relative"
        width={600}
        title="Profile"
        cancelText="Log out"
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {!me ? (
          "Loading..."
        ) : (
          <div className="p-[40px] flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl mb-1 font-bold">{me?.full_name}</h1>
            </div>
            <h2 className="text-xl font-bold text-gray-500 mb-4">
              {me?.username}
            </h2>
            <h3 className="mb-9 text-[15px]">
              <strong>My ID: </strong>
              {me?.id}
            </h3>
            <Tabs
              className="border p-3 rounded-lg mb-7"
              defaultActiveKey="1"
              centered
              items={[
                {
                  label: (
                    <p>
                      <strong>{me?.blog?.length}</strong> Posts
                    </p>
                  ),
                  key: 1,
                  children: me?.blog?.map((post, index) => (
                    <Link
                      to={`/details/${post?.id}`}
                      onClick={() => onCloseModal()}
                    >
                      <div className="flex items-center gap-2">
                        <p>{index + 1}.</p>
                        <p className="font-semibold my-1 hover:underline cursor-pointer">
                          {post?.title}
                        </p>
                      </div>
                    </Link>
                  )),
                },
                {
                  label: (
                    <p>
                      <strong>{me?.followers?.length}</strong> Followers
                    </p>
                  ),
                  key: 2,
                  children: me?.followers?.map((post, index) => (
                    <div className="flex items-center gap-2">
                      <p>{index + 1}.</p>
                      <p className="font-semibold my-1 hover:underline cursor-pointer">
                        {post?.follower?.full_name}
                      </p>
                    </div>
                  )),
                },
                {
                  label: (
                    <p>
                      <strong>{me?.followings?.length}</strong> Followings
                    </p>
                  ),
                  key: 3,
                  children: me?.followings?.map((post, index) => (
                    <div className="flex items-center gap-2">
                      <p>{index + 1}.</p>
                      <p className="font-semibold my-1 hover:underline cursor-pointer">
                        {post?.following?.full_name}
                      </p>
                    </div>
                  )),
                },
              ]}
            />
            {modalUser === localStorage.getItem("my_id") && (
              <Popconfirm
                title="Warning !!!"
                description="Are you sure to log out?"
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <button className=" font-semibold py-2 px-3 rounded-lg hover:bg-slate-200 border w-fit absolute bottom-[20px] right-[20px]">
                  Log out
                </button>
              </Popconfirm>
            )}
          </div>
        )}
      </Modal>
      <div className="py-[10px] px-[30px] flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        {localStorage.getItem("token") ? (
          <div className="flex items-center gap-[10px]">
            {pathname !== "/create-post" && (
              <button
                onClick={() => navigate("/create-post")}
                className="flex items-center gap-[7px] px-[22px] py-[6px] bg-indigo-600 text-white rounded-[100px] border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
              >
                <i
                  className="bx bx-plus-circle"
                  style={{ transform: "scale(1.4)" }}
                ></i>
                <span>Create Post</span>
              </button>
            )}
            <button
              onClick={showModal}
              type="button"
              className="flex items-center gap-2 px-[11px] py-[6px] bg-white text-indigo-600 rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
            >
              <i className="text-xl bx bxs-user-circle"></i>{" "}
              {localStorage.getItem("my_name")}
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="px-[11px] py-[6px] bg-indigo-600 text-white rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
          >
            Join
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
