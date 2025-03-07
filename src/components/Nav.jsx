import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Nav = () => {

  const navigate = useNavigate()

  const [search, setSearch] = React.useState('');

  const handleSearch = async () => {
    await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response => {
      // console.log(response.data.meals[0].idMeal)
      setSearch('');
      navigate(`/recipie/${response.data.meals[0].idMeal}`)
    })
    .catch(error => {
      navigate('/')
      setSearch('');
      alert('No such recipe found!!')
      }
    ); 
  }

  return (
    <div className='Navbar'>
        <h3  onClick={()=>navigate('/')}>VTSS Recipess...</h3>
        <div className='nav-options'>
          <ul>
              <li onClick={()=>navigate('/')}>Home</li>
              <li onClick={()=>navigate('/Category')}>Category</li>
              <li onClick={()=>navigate('/DishList')}>Native Dish</li>
          </ul>
          <div className="nav-search">
            <span>
              <IoSearch className='nav-search-icon' />
              <input type="text" placeholder="Type something.." onChange={(e)=>setSearch(e.target.value)} value={search} />
            </span>
              <button onClick={handleSearch} >Search</button>
          </div>
        </div>
    </div>
  )
}

export default Nav