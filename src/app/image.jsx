"use client"
import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"

export default function HomeImage() {
  return (
      <>
      <div className={styles.imagediv} style={{
        backgroundImage: 'url("./images/home-1.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '650px', // Adjust height as needed
      }}>
        <div className={styles.homeimagetext}>
        <p>USE CODE <strong>XMAS20</strong> FOR 20% OFF</p>
        <h3>CHRISTMAS BONANZA!</h3>
        <p>Take advantage of our festive discounts today!</p> 
        </div>
      </div>
      </>
  )
}
