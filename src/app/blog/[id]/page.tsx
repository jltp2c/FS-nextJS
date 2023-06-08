import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime iste, perferendis alias nostrum commodi non? Exercitationem, qui ex quos excepturi nisi labore, consectetur unde perferendis quidem sed, consequatur optio totam.
          </p>
          <div className={styles.author}>
            <Image
              src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}
              alt="img"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam numquam mollitia impedit labore repellat quam doloremque laborum. Vitae a possimus dolores vero at iure explicabo repellat cumque voluptatibus. Voluptates, aliquam!
        </p>
      </div>
    </div>
  )
}

export default BlogPost