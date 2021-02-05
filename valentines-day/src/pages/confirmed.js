import * as React from "react";
import Layout from '../containers/Layout';

const Confirmed = () => {
  return (
    <Layout 
      headerText="Ok good, just needed to clear that up. Now that you're here, I wrote you a poem for Valentine's Day."
      button1Text="Let's hear it"
      button1Link="/yousure/"
      button2Text="I think I'm good"
      button2Link="/mean/"
      >
    </Layout>
  )
}

export default Confirmed;