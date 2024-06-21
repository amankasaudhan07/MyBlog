import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className=" py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed z-10 top-0 inset-x-0 bg-[#6d44fc] text-white">
     
       <div className="flex items-center">
        <Link to={'/addMyBlog'} >
          <button  className="ml-3  border-2 border-gray-300 py-1 px-4 rounded-md">ADD BLOG</button>
        </Link>
        <Link to={'/showMyBlog'} >
          <button  className="ml-2 border-2 border-gray-300 py-1 px-4 rounded-md">MY BLOG</button>
        </Link>
        <Link to={'/'} className='text-center flex-grow mx-2' >
        <h1 className="pr-64 font-bold text-3xl uppercase ">
          Blogs
        </h1>
        </Link>
     </div>
    </header>
  );
}
