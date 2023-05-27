import Image from 'next/image'
import styles from './page.module.css'

import Card from '@/components/card'

async function getData() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=251&offset=0").then((res) => res.json())

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
      <p className={styles.title}>
        <span>Poke</span>
        <span>Next</span>
        <Image src={'/pokeball.png'} alt='pokeball' height={75} width={75} loading='lazy' />
      </p>
      <div className={styles.pkCards}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

/*https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif*/