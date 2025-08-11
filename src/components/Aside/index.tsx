import React from 'react'
import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Image src={logo} alt="Logo da Code Connect" width={100} height={30} />
        </aside>
    )
}

export default Aside