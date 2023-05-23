import Image from 'next/image'


import styles from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <Link href='/'>
                <h1 className={styles.title}>
                    <Image src={'/pokeball.png'} alt='pokeball' width={100} height={100} />
                    <span>Poke</span>
                    <span>Next</span>
                </h1>
            </Link>
            <ul className={styles.navgation}>
                <Link href={'/'}><li className={styles.item}>Home</li></Link>
                <Link href={'/about'}><li className={styles.item}>About</li></Link>
            </ul>
        </nav>
    )
}