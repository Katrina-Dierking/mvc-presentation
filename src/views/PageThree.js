import React from "react";
import Main from "../modals/Main";

function PageThree() {
  return (
 
      <Main
        title="PAGE THREE"
        description="third slide"
        link="https://hertimetocode.com"
        pageNumber="3"
        url="/pagetwo"
        prev="<<"
        urlTwo="/pagefour"
        next=">>"
        
      />
  
  );
}

export default PageThree;
