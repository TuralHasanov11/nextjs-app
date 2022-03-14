import React from 'react'
import styles from '../styles/Layout.module.css'
import Meta from './Meta'
import Navbar from './Navbar'


export default function Layout({children}) {
  return <>
    <Meta/>
    <Navbar/>
    <div className={styles.container}>
        {children}
    </div>
  </>
}
