import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
        <div> ©2023 JLT. All rights reserved.</div>
        <div className={styles.imgContainer}>
            <Image src="/1.png" width={15} height={15} alt="jlt img fb"/>
            <Image src="/2.png" width={15} height={15} alt="jlt img insta"/>
            <Image src="/3.png" width={15} height={15} alt="jlt img twitter"/>
            <Image src="/4.png" width={15} height={15} alt="jlt img youtube"/>            
        </div>
    </div>
  )
}

export default Footer