import React, { FC } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'

interface Props {
  allPostsData: PostMeta[];
}

const Home: FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Hi 👋</h2>
        <p>{`I'm a Web Frontend Developer in 🇯🇵`}</p>
        <p>It’s pleasure to meet you 🤝</p>

        <h2 className={utilStyles.headingLg}>Links</h2>
        <ul>
          <li><a href="https://github.com/gentamura">GitHub</a></li>
          <li><a href="https://twitter.com/gentamura84">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/gentamura/">LinkedIn</a></li>
          <li><a href="https://qiita.com/GenTamura84/contributions">Qiita</a></li>
          <li><a href="https://teratail.com/users/gentamura">teratail</a></li>
          <li><a href="https://note.com/gentamura84">note</a></li>
          <li><a href="https://zenn.dev/gentamura">Zenn</a></li>
        </ul>

        <h2 className={utilStyles.headingLg}>Apps</h2>
        <ul>
          <li><a href="https://www.npmjs.com/package/gentamura-cli">gentamura-cli</a></li>
          <li><a href="https://www.npmjs.com/package/ts-tree-structure">ts-tree-structure</a></li>
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default Home;
