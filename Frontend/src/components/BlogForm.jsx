import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createBlog = async (data) => {

    const savedUserResponse = await fetch(
      `https://myblog-p0w3.onrender.com/api/v1/addBlog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/showMyBlog")
  };

  return (
    <div className="flex justify-evenly">
      <form onSubmit={handleSubmit(createBlog)} className="mt-8 w-1/2 ">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-900 dark:text-gray-500"
            >
              {" "}
              Title Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Title"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="author"
              className="text-base font-medium text-gray-900 dark:text-gray-500"
            >
              {" "}
              Author Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="author"
                placeholder="Enter Author Name"
                {...register("author")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="category"
              className="text-base font-medium text-gray-900 dark:text-gray-500"
            >
              {" "}
              Category{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Category"
                {...register("category")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="date"
              className="text-base font-medium text-gray-900 dark:text-gray-500"
            >
              {" "}
              Enter Date{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="date"
                placeholder="Enter Date"
                {...register("date")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="content"
              className="text-base font-medium text-gray-900 dark:text-gray-500"
            >
              {" "}
              Content of Blog{" "}
            </label>
            <div className="mt-2.5">
              <textarea name="content" rows={4} cols={40}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Write the Content"
                {...register("content")}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="tag"
              className="text-base font-medium text-gray-900 dark:text-gray-500"
            >
              {" "}
              Realated Tags{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-black dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Tags"
                {...register("tag")}
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Add Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
