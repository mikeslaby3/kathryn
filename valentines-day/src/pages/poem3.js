import * as React from "react";
import Layout from '../containers/Layout';

const Poem3 = () => {
  return (
    <Layout 
      headerText='All it took was the courage to join you on your walk back home.'
      button1Text="Next"
      button1Link="/poem4/"
      button2Text="Back"
      button2Link="/poem2/"
      >
    </Layout>
  )
}

export default Poem3;