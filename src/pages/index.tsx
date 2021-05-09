import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Hi 👋</h2>
        <p>I'm a Web Frontend Developer in 🇯🇵</p>
        <p>It’s pleasure to meet you 🤝</p>

        <h2 className={utilStyles.headingLg}>Links</h2>
        <ul>
          <li><a href="https://github.com/gentamura" target="_blank">GitHub</a></li>
          <li><a href="https://twitter.com/gentamura84" target="_blank">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/gentamura/" target="_blank">LinkedIn</a></li>
          <li><a href="https://qiita.com/GenTamura84/contributions" target="_blank">Qiita</a></li>
          <li><a href="https://teratail.com/users/gentamura" target="_blank">teratail</a></li>
          <li><a href="https://note.com/gentamura84" target="_blank">note</a></li>
          <li><a href="https://zenn.dev/gentamura" target="_blank">Zenn</a></li>
        </ul>

        <h2 className={utilStyles.headingLg}>Apps</h2>
        <ul>
          <li><a href="https://www.npmjs.com/package/gentamura-cli" target="_blank">gentamura-cli</a></li>
          <li><a href="https://www.npmjs.com/package/ts-tree-structure" target="_blank">ts-tree-structure</a></li>
          <li>...</li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}