import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderGif from "../assets/icons/loader.gif";
import ViewsIcon from "../assets/icons/eye.svg";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetcher() {
      const res = await fetch(
        import.meta.env.VITE_BASE_URL + "/api/blog/" + id
      );
      const data = await res.json();
      setPost(data);
    }
    fetcher();
  }, []);

  return (
    <div className="mt-[50px]">
      {post?.user ? (
        <div>
          <div className="mb-[50px]">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h1 className="text-xl font-semibold">
                  {post?.user?.full_name}
                </h1>
                <h2 className="text-xl font-semibold text-gray-400">
                  {post?.user?.username}
                </h2>
              </div>

              <button className="border-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:border-blue-400">
                Follow
              </button>
            </div>
            <div className="flex items-center gap-5 mt-3">
              <p className="text-gray-500">
                {new Date(post?.createdAt).toDateString()}
              </p>
              <span>|</span>
              <div className="flex items-center gap-2">
                <img src={ViewsIcon} alt="" className="w-[20px]" />
                <span>{post?.views}</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[28px] font-semibold bg-gradient-to-r from-[#FF8A00] to-[#BD00FF] bg-clip-text text-transparent mb-[20px]">
              {post?.title}
            </h1>
            <p className="text-[17px] text-[#1A1919] mb-[25px]">{post?.body}</p>
          </div>
        </div>
      ) : (
        <img src={LoaderGif} alt="" className="w-[40px] mx-auto" />
      )}
    </div>
  );
};

export default Details;
