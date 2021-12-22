import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
        {posts.map((post, index) => (
          <div className={styles.card}>
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.excerpt}</p>
          </div>
        ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const meta = fs.readFileSync(
      path.join('posts', filename), 'utf-8');
    const { data: frontmatter } = matter(meta)
    return { slug, frontmatter }
  })
  return {
    props: {
      posts: posts.sort(sortByDate)
    },
  }
}