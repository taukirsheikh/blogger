import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function DashNavBar() {
    const author=useSelector((state)=>state.user.author.name)
  return (
    <div>
        <div className="navbar bg-base-100 shadow-lg flex justify-between">

  <span className="btn btn-ghost text-xl">{author}</span>
  <span className="btn btn-ghost text-xl">{author}</span>
  <div className='flex  gap-3'>

<Link to='new-blog'>
<button className="btn btn-outline btn-primary">New Blog</button>
</Link>
<Link to='blog-by-author'>
<button className="btn btn-outline btn-primary">Edit Blog</button>
</Link>
  </div>
</div>
<Outlet/>


    </div>
  )
}

export default DashNavBar