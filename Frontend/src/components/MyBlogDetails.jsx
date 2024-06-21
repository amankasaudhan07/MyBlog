import React from 'react'


const MyBlogDetails = ({post}) => {
  return (
     <div>
        
        
        {/* blog content */}
        <div className='p-4 rounded-lg shadow-xl bg-[#dfdfdf] hover:scale-[1.02] transition-all duration-300'>
             <span className='text-xl font-bold hover:underline transition-all duration-200'>{post.name}</span>
           
            <p className='my-[2px]'>
                By <span className='italic'>{post.author}</span> on {" "}
                    <span className='underline font-bold text-sm'>{post.category}</span>
            </p>
            <p className='text-sm'> Posted on {post.date} </p>
            <p className='text-justify my-4'> {post.content}</p>
             <p className='text-blue-700 font-[600] text-sm underline mr-2'> {post.tag}</p>
         
        </div>

     
     </div>
  )
}

export default MyBlogDetails