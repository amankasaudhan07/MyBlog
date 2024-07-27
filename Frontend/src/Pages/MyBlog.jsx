import React, { useEffect, useState } from "react";
import MyBlogDetails from "../components/MyBlogDetails";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const  MyBlog = () => {

   const {empData} =useContext(AppContext);
  
  // const [empData, setEmpData] = useState();

  // const getAllData = async () => {
  //   try {
  //     const getPeople = await fetch(
  //       `https://myblog-p0w3.onrender.com/api/v1/showBlog`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const res = await getPeople.json();
  //     setEmpData(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllData();
  // },[]);
  console.log(empData);
  return (
  <div>
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed z-10 top-0 inset-x-0 bg-[#6d44fc] text-white">
            <div className="flex items-center">
                
            <Link to={'/'} >
              <button  className=" ml-3 border-2 border-gray-300 py-1 px-4 rounded-md">Back</button>
            </Link>

                <Link to={'/showMyBlog'} className='text-center flex-grow mx-2'>
                <h1 className="pr-28 font-bold text-3xl uppercase text-center">
                   My Blogs
                </h1>
                </Link>
            </div>
   </header>
    <div className=" my-20 flex flex-col gap-y-10 max-w-2xl mx-auto">
     
        { empData?.data.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : ( empData?.data.map((person) => (
           <MyBlogDetails key={person._id} post={person}/>

        )))}
      
    </div>

  </div>
    // <div>
    //   this is my blog
    // </div>
  )
}

export default MyBlog;
