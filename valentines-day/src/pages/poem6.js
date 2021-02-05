import * as React from "react";
import Layout from '../containers/Layout';

const Poem6 = () => {
  return (
    <Layout 
      headerText={'I guess what I\'m trying to say is that Kathryn, I only have eyes for you.'}
      button2Text="Next"
      button2Link="/poem7/"
      button1Text="Back"
      button1Link="/poem5/"
      >
    </Layout>
  )
}

export default Poem6;