"use client"

import styles from "./page.module.css";
import useSWR from 'swr';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Dashboard() {

  const session = useSession()
  const router = useRouter()

    //SWR method 
const fetcher  = (...args) => fetch(...args).then(res => res.json()) 
const { data, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  if(session.status === "loading"){
    return <p>Loading...</p>
  }

  if(session.status === "unauthenticated"){
    router?.push("/dashboard/login")
  }

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
  
  if(session.status === "authenticated"){
    return (
    <div className={styles.container}>
      <h1>dashboard</h1>
    </div>
  )
  }
 
}

export default Dashboard