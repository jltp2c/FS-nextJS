"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from "./page.module.css"

function Login() {

  const session = useSession()
  const router = useRouter()

  if(session.status === "loading"){
    return <p>Loading...</p>
  }

   if(session.status === "authenticated"){
    router?.push('/dashboard')
  }
  

  const handleSubmit =  (e) => {
  e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value;

    signIn('credentials', 
    {
      email , 
      password
    })
  };

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <form className={styles.form} >
        <input type="email" placeholder='email' className={styles.input} required/>
        <input type="password" placeholder='password' className={styles.input} required/>
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={()=>signIn("google")}> Sign in with Google</button>
    </div>
  )
}

export default Login