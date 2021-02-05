import * as React from "react";
import Layout from '../containers/Layout';

const YouSure = () => {
  return (
    <Layout 
      headerText="Are you sure? I will warn you that it's a little cheesy."
      button1Text="Velveeta is my middle name!"
      button1Link="/poem1/"
      button2Text="Leave me alone I'm on vacation"
      button2Link="/mean/"
      >
    </Layout>
  )
}

export default YouSure;