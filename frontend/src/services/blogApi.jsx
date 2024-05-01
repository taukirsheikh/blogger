import axios from 'axios'

export default async function BlogList() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/blog/')
        console.log(response.data)
        
        return response
    } catch (err) {
        console.error(err)
        throw err;
    }
}

// fetch post done by author
export const fetchPostsByAuthor = async (authorId) => {
    try {
      
      const response = await axios.get(`http://127.0.0.1:8000/blog/by-author/${authorId}/`);
      
     
      return response.data;
    } catch (error) {
      
      console.error("Error fetching posts by author:", error);
      throw error; 
    }
  };

//delete single post done by author

export const deleteBlogPost = async (postId) => {
  try {
    
    const response = await axios.delete(`http://127.0.0.1:8000/blog/update-single/${postId}/`);
    
    
    return response.data;
  } catch (error) {
    
    console.error("Error deleting blog post:", error);
    throw error; 
  }
};


  
  