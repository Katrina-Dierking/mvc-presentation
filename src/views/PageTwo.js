import React from "react";
import Main from "../modals/Main";

function PageTwo() {
  return (
    <Main
      title="PAGE TWO"
      description="second slide"
      link="https://hertimetocode.com"
      pageNumber="2"
      url="/"
      prev="<<"
      urlTwo="/pagethree"
      next=">>"
    />
  );
}

export default PageTwo
