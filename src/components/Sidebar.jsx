import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.wrap}>
            {/* <div>
                <h2 className={styles.head_title}>Wanted Pre-onboarding cource</h2>
            </div> */}
            <nav>
                <Link to={`/`}>page A</Link>
                <Link to={`/page_b`}>page B</Link>
                <Link to={`/page_c`}>page C</Link>
            </nav>
        </div>
    )
}
