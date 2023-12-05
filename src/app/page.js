"use client"
import styles from './page.module.css'
import HomeImage from "./image"
import Footer from './footer'

export default function Home() {
  return (
    <>
      <div>
        <HomeImage />
        <div className={styles.productcardwrapper}>
          <section className={styles.nestedproductcard}></section>
          <section className={styles.nestedproductcard}></section>
          <section className={styles.nestedproductcard}></section>
          <section className={styles.nestedproductcard}></section>
        </div>
        {/* <Footer /> */}
       </div>
    </>
  )
}
