import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"

export default function Header() {
  return (
      <>
          <nav className={styles.navbar}>
              <li><Link href="/">OFFERS</Link></li>
              <li><Link href="/">MOST WANTED</Link></li>
              <li><Link href="/">GARDENING</Link></li>
              <li><Link href="/">COMPOSTING</Link></li>
              <li><Link href="/">WATER SAVING</Link></li>
              <li><Link href="/">RECYCLING</Link></li>
              <li><Link href="/">BRANDS</Link></li>
              <li><Link href="/">LEARN</Link></li>
              <li><Link href="/">EARN REWARDS</Link></li>
              <li><Link href="/">SUPPORT</Link></li>
          </nav>
      </>
  )
}
