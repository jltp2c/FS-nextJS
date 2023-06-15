import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'
import {items} from './data.jsx'
import { notFound } from 'next/navigation'

const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {

  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catName}>{params.category}</h1>
    { data.map(it =>{
      return(
        <div className={styles.item} key={it.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{it.title}</h1>
          <p className={styles.desc }>{it.desc}</p>
          <Button text="See more" url="#"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image src={it.image} className={styles.img} fill={true}  alt={it.title} priority />
        </div>
      </div>
      )
      
      })}
    </div>
  )
}

export default Category