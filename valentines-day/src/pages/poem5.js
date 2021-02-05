import * as React from "react";
import Layout from '../containers/Layout';

const Poem5 = () => {
  return (
    <Layout 
      headerText={'Anyways, I don\'t want to take up too much of your time as I know you have things to do!'}
      button1Text="Next"
      button1Link="/poem6/"
      button2Text="Back"
      button2Link="/poem4/"
      >
    </Layout>
  )
}

export default Poem5;