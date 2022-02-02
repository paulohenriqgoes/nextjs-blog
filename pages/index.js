import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Paulo</b>. I'm a frontend developer at serrabits{' '}
          and degustator of delicious foods 😋. You can find me on{' '}
          <a href="https://twitter.com/paulohenriqgoes">Twitter</a>, <a href="https://github.com/paulohenriqgoes">Guithub</a> and <a href="https://www.linkedin.com/in/paulohenriqgoes/">Linkedin.</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
