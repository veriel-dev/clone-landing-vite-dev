import React from 'react'
import styles from "./hero.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { HeroDiagram } from './heroDiagram'
export const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>

      <Link  
        className={styles['hero-pill']} 
        target='_blank'  
        href="https://viteconf.org/24/replay?utm=vite"
      >
        <Image  src={"https://vite.dev/viteconf.svg"} alt='Vite Conf ' width={20} height={20}/> 
        <span>ViteConf 2024 Talks</span>
      </Link>
      <h1>The Build Tool<br />for the Web</h1>
      <h3>
        Vite is a blazing fast frontend build tool powering the next generation
        of web applications.
      </h3>
      <div className={styles['hero-actions']}>
        <Link  href={"/guide/"} className='btn  btn--primary'> 
          Get Started
        </Link>
        <Link
          href="https://github.com/vitejs/vite"
          target="_blank"
          className="btn btn--outline"
        >
          <Image  src={"https://vite.dev/github.svg"} alt='Vite Conf ' width={20} height={20}/> 
          GitHub
        </Link>
      </div>
      </div>
      <HeroDiagram />
    </div>
  )
}
