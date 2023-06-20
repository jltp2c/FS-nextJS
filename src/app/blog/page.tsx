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
  _id : string,
  title : string,
  desc : string,
  image : string,
  content : string,
  username : string,
}

const Blog = async () => {
  const dataInfo  = await getData()
  return (
    <div className={styles.container} >
        {
         dataInfo.map((item : dataType) => {
           return(
             <Link href={`/blog/${item._id}`} className={styles.mainContainer} key={item._id}> 
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
            <div className={styles.imgContainer}>
              <Image src={item.image} className={styles.img} fill={true} priority alt={item.title}/>
            </div>
          </Link>
           )
         })
          
        }
    </div>
  )
}

export default Blog