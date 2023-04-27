import React from 'react'
import './main.scss'

function Main({title, img, description, link, item, nextPage, prev}) {
  return (
    <div className="mainModal">
       
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{description}</p>
        <a href={link}>{item}</a>

        <div className='pages'>
            <a href={prev}><span>previous</span></a>
            <a href={nextPage}><span>next</span></a>
        </div>
    
    </div>
  );
}

export default Main