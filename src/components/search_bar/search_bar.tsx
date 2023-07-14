import React from 'react'
import styles from '../search_bar/searchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.input}>
      <input className={styles.input_input_field} type='search' placeholder='' />
    </div>
  )
}
