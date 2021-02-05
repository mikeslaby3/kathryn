import * as React from "react";
import Layout from '../containers/Layout';

const Poem2 = () => {
  return (
    <Layout 
      headerText={'The narrator of my life definitely looked down and said "There\'s no way she\'ll ever notice him!"'}
      button2Text="Next"
      button2Link="/poem3/"
      button1Text="Back"
      button1Link="/poem1/"
      >
    </Layout>
  )
}

export default Poem2;