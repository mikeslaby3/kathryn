import * as React from "react";
import Layout from '../containers/Layout';

const Poem1 = () => {
  return (
    <Layout 
      headerText="Ok here goes nothing: You started off as just the cute girl from the gym."
      button2Text="Next"
      button2Link="/poem2/"
      button1Text="Back"
      button1Link="/yousure/"
      >
    </Layout>
  )
}

export default Poem1;