"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import styles from "./page.module.css"

function Login() {
  return (
    <div className={styles.container}>
      <button onClick={()=>signIn("google")}> Sign in with Google</button>
    </div>
  )
}

export default Login