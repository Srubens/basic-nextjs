import type { NextPage } from 'next'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1 className={styles.title} >Olá Mundo!</h1>
        <p>Rubens Filipe</p>
      </div>
    </>
  )
}

export default Home
