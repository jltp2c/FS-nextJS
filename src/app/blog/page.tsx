import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store'  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type dataType = {
  userId : number,
  id : number,
  title : string,
  body : string,
}

const Blog = async () => {
  const dataInfo  = await getData()
  return (
    <div className={styles.container} >
        {
         dataInfo.map((item : dataType) => {
           return(
             <Link href={`/blog/${item.id}`} className={styles.mainContainer} key={item.id}> 
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
            <div className={styles.imgContainer}>
              <Image src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} className={styles.img} fill={true} priority alt="image"/>
            </div>
          </Link>
           )
         })
          
        }
    </div>
  )
}

export default Blog