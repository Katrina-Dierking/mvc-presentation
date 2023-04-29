import React from 'react'
import { Link } from "react-router-dom";
import './main.scss'

function Main(
    {
      title, 
      img, 
      description, 
      secondPara,
      thirdPara,
      link, 
      item, 
      pageNumber, 
      url, 
      urlTwo,
      prev,
      next,
    }
  ) {
  return (
    <div className="mainModal">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{secondPara}</p>
        <hr></hr>
        <p>{thirdPara}</p>
        <img src={img} alt="" />
        <a href={link}>{item}</a>
        </div>
        <div className="links">
        
          <Link to={url}>
            <button className="pagButtonPrev">{prev}</button>
          </Link>
          <Link to={urlTwo}>
            <button className="pagButtonNext">{next}</button>
          </Link>
        </div>
        <p>{pageNumber}</p>
    </div>
  );
  }
  
  export default Main

