import Link from 'next/link'
import styles from './card.module.css'

import Image from 'next/image'

export default function Card ({pokemon}) {
    return (
        <div className={styles.card}>
            <h1 id={pokemon.name}>{pokemon.name}</h1>
            <Image src={pokemon.image} alt={pokemon.name} height={100} width={100} loading='lazy' />
            <Link href={`/${pokemon.name}`} className={styles.button}>DETAILS</Link>
          </div>
    )
}