import Head from "next/head";
import Navbar from "../../components/navbar";
import Privacy from "../../components/privacy";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Chatument</title>
        <meta
          name="description"
          content="The next generation tooling for documentation, exploration and value
          extraction for your organization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Privacy />
    </>
  );
};

export default TermsOfService;