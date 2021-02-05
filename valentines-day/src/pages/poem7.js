import * as React from "react";
import Layout from '../containers/Layout';

const Poem7 = () => {
  return (
    <Layout 
      headerText={'And when I\'m with you, the sun always seems to shine.'}
      button1Text="Next"
      button1Link="/poem8/"
      button2Text="Back"
      button2Link="/poem6/"
      >
    </Layout>
  )
}

export default Poem7;