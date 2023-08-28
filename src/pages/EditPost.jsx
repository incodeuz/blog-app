import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const [singleData, setSingleData] = useState({});

  async function fetcher(val) {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/blog/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ ...val }),
    });
    const data = await res.json();

    console.log("success", data);
  }
  const editPost = (e) => {
    e.preventDefault();
    const [titleVal, descVal] = e.target.querySelectorAll("#input");
    fetcher({
      title: titleVal.value,
      body: descVal.value,
      user_id: localStorage.getItem("my_id"),
    });
  };
  const { id } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  }, []);
  return (
    <div>
      <form onSubmit={(e) => editPost(e)}>
        <div className="mb-6">
          <label
            htmlFor="input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Edit post title
          </label>
          <input
            defaultValue={singleData?.title}
            type="text"
            id="input"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500 -light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="input"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Edit post description
          </label>
          <textarea
            defaultValue={singleData?.body}
            id="input"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 -700 -600 -400  -blue-500 -blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center -600 -blue-700 -blue-800"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditPost;
