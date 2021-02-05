import * as React from "react";
import Layout from '../containers/Layout';

const Poem4 = () => {
  return (
    <Layout 
      headerText={'Now look at me, I\'m at the point where I\'m writing you long distance poems (that kinda rhymed...)'}
      button1Text="Next"
      button1Link="/poem5/"
      button2Text="Back"
      button2Link="/poem3/"
      >
    </Layout>
  )
}

export default Poem4;