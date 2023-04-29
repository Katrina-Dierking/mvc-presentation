import React from 'react'
import Main from '../modals/Main'


function PageOne() {
  return (
    <>
      <Main
        title="PAGE ONE"
        description="start of MVC presentation"
        link="https://hertimetocode.com"
        pageNumber="1"
        urlTwo = "/pagetwo"
        next = ">>"
      />
 
    </>
  );
}

export default PageOne