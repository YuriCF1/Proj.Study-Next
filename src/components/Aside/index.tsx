import React from 'react'
import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'
import Link from 'next/link'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Link href="/">
                <Image src={logo} alt="Logo da Code Connect" width={100} height={30} />
            </Link>
        </aside>
    )
}

export default Aside