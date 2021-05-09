import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          key="og:image"
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            postData.title
          )}.png?theme=dark&md=0&fontSize=50px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg"`}
        />
        <meta
          key="og:title"
          name="og:title"
          content={postData.title}
        />
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps =  async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}