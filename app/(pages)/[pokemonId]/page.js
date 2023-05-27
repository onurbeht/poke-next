import styles from './page.module.css'

import Image from "next/image";
import Link from "next/link";

async function generateStaticParams(id) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());

    const img = data.sprites.versions['generation-v']['black-white'].animated.front_default

    const type = []
    data.types.map((item, index) => (
        type[index] = item.type.name
    ))

    const height = data.height
    const weight = data.weight

    return (
        {
            Image: img,
            Type: type,
            Height: height,
            Weight: weight
        }
    )
}


export default async function Details({ params }) {

    const pokemon = await generateStaticParams(params.pokemonId)

    return (
        <div className={styles.container}>
            <h1>{params.pokemonId}</h1>
            <Image src={pokemon.Image} height={100} width={100} alt={params.pokemonId} loading="lazy" />
                <h3>Type</h3>
            <div className={styles.type_container}>
                {pokemon.Type.map((type, id) => (
                    <p className={`${styles.type} ${styles['type_' + type]}`} key={id}>{type}</p>
                ))}
            </div>
            <div className={styles.data_container}>
                <div className={styles.data}>
                    <h3>Height</h3>
                    <p>{pokemon.Height * 10}cm</p>
                </div>
                <div className={styles.data}>
                    <h3>Weight</h3>
                    <p>{pokemon.Height / 10}kg</p>
                </div>
            </div>

            <Link className={styles.button} href={`/#${params.pokemonId}`}>RETURN</Link>
        </div>
    )
}