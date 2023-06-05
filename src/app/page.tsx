import Hero from 'public/hero.png';
import Image from "next/image";
import styles from "./page.module.css"
import Button from '@/components/button/Button';

export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.item}>
      <h1 className={styles.title}>Better design for your digital products.</h1>
      <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
      </p>
      <Button url="/portfolio" text="See our works" />
    </div>
     <div className={styles.item}>
      <Image className={styles.img} src={Hero} alt="img hero"/>
     </div>
  </div>
  )
}
