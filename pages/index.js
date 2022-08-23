import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        I am Myla Manalastas Sampang. I am 20 years old and turning 21 this coming month of september. I am from San Jaun, San Luis Pampanga. I like playing/watching  volleyball, and I like to sing and dance even though Im not that totally good at it. 
        I have a twin sister and we are the eldest among our siblings. I take the IT course because I had a little bit of knowledge about technology and because it is indemand in todays time.
        A vision Ive always wanted for myself 10 years from now is to be a wealthy business woman working in a big company in a better position. And to be the best version of myself and do what I really like, 
        following my profession and making my family proud.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
