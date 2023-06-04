 "use client"
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'


function Navbar() {
 

  type linkType = {
    id: number
    title: string
    url: string
  }[]

const links:linkType = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


  return (
  
    <div className={styles.container}>
       
      <Link href="/" className={styles.logo}>TrendyZone</Link>
      <div className={styles.links}>
        {links?.map(link =>{
          return(
            <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
            ) 
        })}
        <button onClick={()=>{console.log("logged out!")}} className={styles.logout}>Logout</button>
      </div>

      
    </div>
  )
}

export default Navbar