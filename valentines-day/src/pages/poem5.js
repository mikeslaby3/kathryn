import * as React from "react";
import Layout from '../containers/Layout';

const Poem5 = () => {
  return (
    <Layout 
      headerText={'Anyways, I don\'t want to take up too much of your time as I know you have things to do!'}
      button2Text="Next"
      button2Link="/poem6/"
      button1Text="Back"
      button1Link="/poem4/"
      >
    </Layout>
  )
}

export default Poem5;