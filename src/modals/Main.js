import React from 'react'
import './main.scss'

function Main({title, img, description, link}) {
  return (
    <div className="mainModal">
        <h1>{title}</h1>
        <img src={img} alt = '' />
        <p>{description}</p>
        <a href="#">{link}</a>
    </div>
  )
}

export default Main