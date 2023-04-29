import React from 'react'
import Main from '../modals/Main'
import './pageone.scss'


function PageOne() {
  return (
    <>
      <Main
        title="PAGE ONE"
        description="MVC stands for Model View Controller and is used to separate business logic from presentation."
        secondPara="Model = Data | View = GUI | Controller = Brains"
        thirdPara="The MODEL stores and manages data often in the form of a database. The VIEW is the GUI which stands for Graphical User Interface and is the visual representation of the data given. The functionality given to the user (clicking a button or a link, etc) is contained in the View. The CONTROLLER connects the Model and View. It's the middle-man."
        link="https://hertimetocode.com"
        pageNumber="1"
        urlTwo = "/pagetwo"
        next = ">>"
        />
        <section className='notesSection'>
          <p className='slideNotes'>SLIDE NOTES:</p>
              <ul>
                <li>One:</li>
                <li>Two:</li>
                <li>Three:</li>
              </ul>
        
        </section>

 
    </>
  );
}

export default PageOne