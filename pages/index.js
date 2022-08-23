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
        I am Alaina Louise G. Payawal, 22 years old, from Candaba, Pampanga. 
        I remember one time, my friend told me to put my energy into things that help me grow - I am trying to do that. 
        I am trying to create a life that makes me happy. I love to travel and experience different cultures of every place that I have been.
        I love my coffee black, old school, right?
        </p>

        <p>
        People often call me Jack of all Trades but that’s far beyond the truth, I consider myself as mediocre.
        </p>
        <p>
        Despite all the hate and chaos happening in our world right now, I still believe in the goodness of people.
        I personally believe that we should have a healthy relationship with other people. 
        It is so nice to connect with people emotionally and somehow join them on a journey that might change you as you 
        follow them and draws you into a story that is bigger than yourself.
        </p>

        <p>
        Whenever I feel stressed out, I like to play the piano & guitar, and to draw, too. 
        I like to allot time to sit with my thoughts and feel my feelings - it’s like going to another universe, I enjoy silence once in a while.

        </p>

        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}