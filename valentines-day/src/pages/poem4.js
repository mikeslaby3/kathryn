import * as React from "react";
import Layout from '../containers/Layout';

const Poem4 = () => {
  return (
    <Layout 
      headerText={'Now look at me, I\'m at the point where I\'m writing you long distance poems (that kinda rhymed...)'}
      button2Text="Next"
      button2Link="/poem5/"
      button1Text="Back"
      button1Link="/poem3/"
      >
    </Layout>
  )
}

export default Poem4;