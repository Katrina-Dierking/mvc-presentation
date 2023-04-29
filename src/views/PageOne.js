import React from 'react'
import Main from '../modals/Main'


function PageOne() {
  return (
    <>
      <Main
        title="PAGE ONE"
        description="This is the beginning of my MVC presentation"
        secondPara="this is the second paragraph."
        link="https://hertimetocode.com"
        pageNumber="1"
        urlTwo = "/pagetwo"
        next = ">>"
      />
 
    </>
  );
}

export default PageOne