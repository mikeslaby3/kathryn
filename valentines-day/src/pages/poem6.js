import * as React from "react";
import Layout from '../containers/Layout';

const Poem6 = () => {
  return (
    <Layout 
      headerText={'I guess what I\'m trying to say is that Kathryn, I only have eyes for you.'}
      button1Text="Next"
      button1Link="/poem7/"
      button2Text="Back"
      button2Link="/poem5/"
      >
    </Layout>
  )
}

export default Poem6;