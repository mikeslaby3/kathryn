import * as React from "react";
import SingleButtonLayout from '../containers/SingleButtonLayout';

const Imposter = () => {
  return (
    <SingleButtonLayout 
      headerText="Nice try imposter, get lost!"
      buttonText="Try Again"
      buttonLink="/"
      >
    </SingleButtonLayout>
  )
}

export default Imposter;