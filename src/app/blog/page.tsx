import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Blog() {
  return (
    <div className={styles.container} >
      <Link href="/blog/testId" className={styles.mainContainer}> 
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatem, tempora quibusdam provident harum minus eveniet asperiores deleniti blanditiis cum. Labore inventore, exercitationem eveniet ipsum a cumque corrupti ea ducimus.</p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} className={styles.img} fill={true}  alt="image"/>
          </div>
        </div>
      </Link>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam suscipit dolores culpa non excepturi qui velit voluptatem harum quas voluptatibus distinctio accusamus consectetur autem corrupti quam officiis, veniam porro animi.</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} className={styles.img} fill={true}  alt="image"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, natus commodi veritatis nulla praesentium eaque excepturi asperiores! Quos delectus doloribus odit fugit sit, nulla hic ratione, eaque, beatae ducimus dolorem!</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} className={styles.img} fill={true}  alt="image"/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, itaque quidem sunt autem ipsum omnis dignissimos. Voluptatibus explicabo debitis quibusdam nulla animi architecto nisi? Commodi possimus praesentium iusto corporis quod.</p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"} className={styles.img} fill={true}  alt="image"/>
        </div>
      </div>
    </div>
  )
}

export default Blog