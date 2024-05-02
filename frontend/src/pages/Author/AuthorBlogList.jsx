import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { fetchPostsByAuthor } from '../../services/blogApi';
import AuthorBlogCard from '../../components/AuthorComponents/AuthorBlogCard';

function AuthorBlogList() {
  const authorId = useSelector((state) => state.user.author.id);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [delet, setDelet] = useState(false)
  console.log(delet)
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const data = await fetchPostsByAuthor(authorId);
        setPosts(data); 
        console.log('post',posts)
        setIsLoading(false)
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [authorId,delet]); 
  return (
    <>
    {isLoading ?(
      <span className="ml-[50%] loading loading-dots loading-lg"></span>
    ):(
      <div className="flex flex-wrap mt-16 gap-10 mx-8">
      {posts.map((blog) => (
        <AuthorBlogCard
          key={blog.id}
          blog_id={blog.id}
          title={blog.title}
          date={blog.created_at}
          content={blog.content}
          setDelet={setDelet}
          delet={delet}
        />
      ))}
    </div>
    )}
    </>
    
  )
}

export default AuthorBlogList