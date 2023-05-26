import Image from 'next/image'
import styles from './page.module.css'

async function getData() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=90&offset=0").then((res) => res.json())

  const results = data.results
  const PkName = results[0].name
  
  
  const moreInfo = results[0].url
  const info = await fetch(moreInfo).then((res) => res.json())
  
  const img = info.sprites.versions['generation-v']['black-white'].animated.front_default

  
  return {
    'name': PkName,
    'img': img
  }
}

export default async function Home() {

  const pokemon = await getData()  

  return (
    <main className={styles.container}>
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.img} alt={pokemon.name} height={100} width={100} loading='lazy'/>
    </main>
  )
}

/*https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif*/