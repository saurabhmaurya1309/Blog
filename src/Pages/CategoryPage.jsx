import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div >
      <Header/>
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
        <button
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2> 
            Blogs on <span>{category}</span>
        </h2>
      <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
