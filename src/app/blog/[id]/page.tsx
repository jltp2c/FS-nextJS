import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';



async function getData(id : number) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store'  });
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

export async function generateMetadata({ params}:any) {
const post = await getData(params.id)
  return {
    title: post.title,
    description : post.desc
  }
}

async function BlogPost({params }: any) {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
           {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt="img"
              width={40}
              priority
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt="img"
            fill={true}
            className={styles.image}
            priority
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost