 "use client"
import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import DarkTheme from '../darkTheme/Darktheme'
import { signOut, useSession } from 'next-auth/react';


function Navbar() {
 
  const session = useSession()

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
        <DarkTheme/>
        {links?.map(link =>{
          return(
            <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
            ) 
        })}
        {session.status === "authenticated" && (
          <button  
          className={styles.logout}
          onClick={signOut}>Logout</button>
        )}
      </div>

      
    </div>
  )
}

export default Navbar