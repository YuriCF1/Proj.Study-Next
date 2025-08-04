import React from 'react'
import Image from 'next/image'
import styles from './aside.module.css'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Image src="/logo.png" alt="Logo da Code Connect" width={100} height={30} />
        </aside>
    )
}

export default Aside