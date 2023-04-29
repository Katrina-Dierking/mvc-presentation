import React from 'react'
import Main from '../modals/Main'


function PageOne() {
  return (
    <>
      <Main
        title="PAGE ONE"
        description="MVC stands for Model View Controller and is used to separate business logic from presentation."
        secondPara="Model = Data | View = GUI | Controller = Brains"
        thirdPara="The Model stores and manages data often in the form of a database. The View is the GUI which stands for Graphical User Interface and is the visual representation of the data given. The functionality given to the user (clicking a button or a link, etc) is contained in the View. The Controller connects the Model and View. It's the middle-man."
        link="https://hertimetocode.com"
        pageNumber="1"
        urlTwo = "/pagetwo"
        next = ">>"
        />
        <p>SLIDE NOTES:</p>

 
    </>
  );
}

export default PageOne