import Image from "next/image";

import styles from './page.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <span>Está pagina foi criada apenas para adicionarmos uma simples rota</span>
            <span>Enquanto isso...</span>
            <h1>Aprecie essa bela foto do Charizard</h1>
            <Image src={'/charizard.png'} alt='Charizard' height={300} width={700} />
        </div>
    )
}