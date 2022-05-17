import React from 'react'
import s from "./Search.module.scss"
import {BsSearch} from "react-icons/bs"
function Search() {
  return (
    <form className={s.form}>
        <BsSearch/>
        <input type="text" className={s.search} placeholder='Search Twitter'/>
    </form>
  )
}

export default Search