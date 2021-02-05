import * as React from "react";
import Layout from '../containers/Layout';

const Poem3 = () => {
  return (
    <Layout 
      headerText='All it took was the courage to join you on your walk back home.'
      button2Text="Next"
      button2Link="/poem4/"
      button1Text="Back"
      button1Link="/poem2/"
      >
    </Layout>
  )
}

export default Poem3;