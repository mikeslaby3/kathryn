import * as React from "react";
import SingleButtonLayout from '../containers/SingleButtonLayout';

const theEnd = () => {
  return (
    <SingleButtonLayout 
      headerText="The End!"
      buttonText="Restart"
      buttonLink="/"
      >
    </SingleButtonLayout>
  )
}

export default theEnd;