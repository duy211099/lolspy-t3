import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.scss'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a>Logo</a>
            <ul>
                <li><Link href="" className="nav-item">Home</Link></li>
                <li><Link href="" className="nav-item">Champions</Link></li>
                <li><Link href="" className="nav-item">Items</Link></li>
                <li><Link href="" className="nav-item">Game Mode</Link></li>
            </ul>
            <div>
                <span>🔍</span>
                <span>🌍</span>
            </div>
        </nav>
    )
}
