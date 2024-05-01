import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import BlogList from '../services/blogApi'
import BlogCard from '../components/HomePageComponents/BlogCard'
import {Outlet} from "react-router-dom"
import { useParams } from 'react-router-dom';



function Home() {
const [blogList,setBlogList] =useState([])
const [isLoading, setIsLoading] = useState(true);
const { blog_id } = useParams();
console.log(blog_id,'params')

useEffect(() => {
    let mounted = true;
    const fetchBlogData = async () => {
        try {
          const resp = await BlogList();
          if (mounted) {
            const sortedBlogList = resp.data.sort((a, b) => b.id - a.id);
            setBlogList(sortedBlogList);
            console.log('homedata',blogList);
            setIsLoading(false);
          }
        } catch (err) {
          console.error(err);
          setIsLoading(false);
          
        }
      };
  
      fetchBlogData();
  
      return () => {
        mounted = false;
      };

},[])

  return (
    <>
    <div>

     <NavBar/>
     {blog_id?(
        <Outlet/>
    ):(
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap mt-16 gap-10 mx-8">
            {blogList.map((blog) => (
              <BlogCard
                key={blog.id}
                blog_id={blog.id}
                title={blog.title}
                date={blog.created_at}
                content={blog.content}
              />
            ))}
          </div>
        ))}


    </div>
    </>
  )
}

export default Home