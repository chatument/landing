import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Chatument</title>
        <meta
          name="description"
          content="The next generation tooling for documentation, exploration and value
          extraction for your organization."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle title="Introducing Chatument">
        The next generation tooling for documentation, exploration and value
        extraction for your organization. No matter the scale of your
        documentation Chatument will enable your collaborators and stakeholders
        to get value from it efficiently.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Footer />
    </>
  );
};

export default Home;
