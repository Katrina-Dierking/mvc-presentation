import React from "react";
import Main from "../modals/Main";

function PageThree() {
  return (
 
      <Main
        title="PAGE THREE"
        description="start of MVC presentation"
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
