import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

//const Nav = ({search,setSearch}) => {
  const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
    <nav className='nav'>
    
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">search</label>

         <input
          autoFocus
          id='search'
          type='text'
          role='searchbox'
          placeholder='Search Posts'
          value={search}
          onChange={e=>setSearch(e.target.value)}
            
         />

    </form>
    
    <ul>

          <li> <Link to="/">Home </Link></li>
          <li> <Link to="/about">About </Link></li>
          <li> <Link to="/post">Post </Link></li>
         
    </ul>

    </nav>
  )
}

export default Nav