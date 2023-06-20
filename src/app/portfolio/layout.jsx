import React from 'react'
import styles from './page.module.css'

export const metadata = {
  title: 'PortFolio',
  description: 'Created by JLT',
}

function Layout({children }) {
  return (
    <div >
       <h1 className={styles.mainTitle}>Our works</h1>
       {children}
    </div>
  )
}

export default Layout