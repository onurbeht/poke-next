import Image from 'next/image'
import styles from './page.module.css'

async function getData() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0").then((res) => res.json())

  const results = data.results

  let pokemons = []

  for (let i = 0; i < results.length; i++) {
    const PkName = results[i].name

    const moreInfo = results[i].url
    const info = await fetch(moreInfo).then((res) => res.json())

    const img = info.sprites.versions['generation-v']['black-white'].animated.front_default

    pokemons[i] = {
      name: PkName,
      image: img
    }
  }

  return pokemons
}

export default async function Home() {

  const pokemons = await getData()

  return (
    <div className={styles.container}>
      <div className={styles.pkCards}>
        {pokemons.map((pokemon) => (
          <div className={styles.card}>
            <h1>{pokemon.name}</h1>
            <Image src={pokemon.image} alt={pokemon.name} height={100} width={100} loading='lazy' />

            <p className={styles.button}>details</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/*https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif*/