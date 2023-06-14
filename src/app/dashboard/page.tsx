"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"

function Dashboard() {
  
  const [data,setData] = useState([])
  const [err,setError] = useState(false)
  const [load,setLoading] = useState(false)

  useEffect(()=> {
    const getData = async () =>{
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'  });
        if (!res.ok) {
         setError(true)
        }
        const info = await res.json();
        setData(info)
        setLoading(false)
    }
    getData()
  },[]) 
  console.log(data)
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Dashboard