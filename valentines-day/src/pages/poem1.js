import * as React from "react";
import Layout from '../containers/Layout';

const Poem1 = () => {
  return (
    <Layout 
      headerText="You started off as just the cute girl from the gym."
      button1Text="Next"
      button1Link="/poem2/"
      button2Text="Back"
      button2Link="/yousure/"
      >
    </Layout>
  )
}

export default Poem1;