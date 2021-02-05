import * as React from "react";
import Layout from '../containers/Layout';

const Poem2 = () => {
  return (
    <Layout 
      headerText={'The narrator of my life definitely looked down and said "There\'s no way she\'ll notice him!"'}
      button1Text="Next"
      button1Link="/poem3/"
      button2Text="Back"
      button2Link="/poem1/"
      >
    </Layout>
  )
}

export default Poem2;