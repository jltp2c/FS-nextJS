"use client"

import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";
import useSWR from 'swr';




function Dashboard() {
  //SWR method 
 const fetcher  = (...args: Parameters<typeof fetch>) => fetch(...args).then(res => res.json()) 
const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 console.log(data)
if (error) return <div>failed to load</div>
if (isLoading) return <div>loading...</div>


  //useEffect method 
  // const [data,setData] = useState([])
  // const [err,setError] = useState(false)
  // const [load,setLoading] = useState(false)

  // useEffect(()=> {
  //   const getData = async () =>{
  //       setLoading(true)
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'  });
  //       if (!res.ok) {
  //        setError(true)
  //       }
  //       const info = await res.json();
  //       setData(info)
  //       setLoading(false)
  //   }
  //   getData()
  // },[]) 
  
  return (
    <div className={styles.container}>
      <h1>dashboard</h1>
    </div>
  )
}

export default Dashboard