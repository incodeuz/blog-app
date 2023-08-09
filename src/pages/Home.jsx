import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/icons/search.svg";
import Card from "../components/Card";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    async function fetcher() {
      const res = await fetch(import.meta.env.VITE_BASE_URL + "/api/blog");
      const data = await res.json();
      setPosts(data);
      setNewPosts(data);
    }

    fetcher();
  }, []);

  const searchPosts = (e) => {
    setPosts(
      newPosts.filter((v) =>
        v.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 w-full mb-10">
        <div className="relative w-full">
          <img className="absolute top-[5px] left-1" src={SearchIcon} alt="" />
          <input
            onKeyDown={(e) => searchPosts(e)}
            className="w-full p-2 pl-9 items-center border rounded-[100px]"
            type="text"
          />
        </div>
        <button
          type="button"
          className="w-[200px] px-[11px] py-[6px] bg-indigo-600 text-white rounded-[100px] border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
        >
          Search posts
        </button>
      </div>

      <main>
        {posts.length
          ? posts?.map((post, index) => <Card key={index} {...post} />)
          : "Loading..."}
      </main>
    </div>
  );
};

export default Home;
