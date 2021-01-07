import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = async function (url) {
  let data = {}
  try {
    const res = await fetch(url)
    data = await res.json()
  } catch (error) {
    console.log('error in fetching...')
    console.log(error)
  }
  return data
}
export default function Home({ userData }) {
  // const { data, error } = useSWR('http://localhost:8080/users', fetcher, {
  //   initialData: userData,
  // })
  const addJon = async (e) => {
    e.preventDefault()
    await fetcher('http://localhost:8080/addjon')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ol>
        {userData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <button onClick={addJon}>Add Jon</button>
    </div>
  )
}

export async function getStaticProps() {
  // ...
  const userData = await fetcher('http://localhost:8080/users')
  console.log('rebuilding page....')
  return {
    props: { userData: userData },
    revalidate: 60 * 15,
  }
}
