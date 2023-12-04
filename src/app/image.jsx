"use client"
import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"

export default function HomeImage() {
  return (
      <>
      <div className={styles.imagediv}>
            <Image src="/images/home-1.webp" alt='home-1' width={600} height={400}  className='home-img-class'/>
          </div>
      </>
  )
}
