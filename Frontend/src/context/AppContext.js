import { createContext, useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  // Fetch Blog Data
  const fetchBlogPosts = async (page = 1, tag=null, category) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag) {
      url += `&tag=${tag}`;
    }
    if(category) {
      url += `&category=${category}`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something Went Wrong");
      console.log("Api Response", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };

    // get Myblog data
  const [empData, setEmpData] = useState();
  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `https://myblog-p0w3.onrender.com/api/v1/showBlog`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setEmpData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);

  // Handle When Next and Previous button are clicked
  const handlePageChange = (page) => {
    navigate( { search: `?page=${page}`});
    setPage(page);
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    empData,
    getAllData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
