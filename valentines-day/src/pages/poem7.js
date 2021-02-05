import * as React from "react";
import Layout from '../containers/Layout';

const Poem7 = () => {
  return (
    <Layout 
      headerText={'And when I\'m with you, the sun always seems to shine.'}
      button2Text="Next"
      button2Link="/poem8/"
      button1Text="Back"
      button1Link="/poem6/"
      >
    </Layout>
  )
}

export default Poem7;