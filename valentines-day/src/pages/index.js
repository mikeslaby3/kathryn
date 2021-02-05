import * as React from "react";
import Layout from '../containers/Layout';

const IndexPage = () => {
  return (
    <Layout 
      headerText="Please identify yourself before proceeding"
      button1Text="Kathryn Joanna Brontsema"
      button1Link="/confirmed/"
      button2Text="Someone else"
      button2Link="/imposter/"
      >
    </Layout>
  )
}

export default IndexPage;
