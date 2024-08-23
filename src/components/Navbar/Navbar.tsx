import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={`${styles.cont}`}>
        <div className={`${styles.icont}`}>
            <Link href={'/'}>
                <span className={`${styles.logo}`}>Stellar Study</span>
            </Link>
            <Link href={`/courses`} className={`p-0 ml-auto`}>
                Courses
            </Link>
            <Link href={`/login`} className={`${styles.login}`}>
                Login
            </Link>
            <Link href={`/signUp`} className={`${styles.SignIn}`}>
                Sign up
            </Link>
        </div>
    </div>
  )
}

export default Navbar