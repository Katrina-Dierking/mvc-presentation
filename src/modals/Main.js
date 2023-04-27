import React from 'react'
import './main.scss'

function Main({title, img, description, link, item}) {
  return (
    <div className="mainModal">
        <h1>{title}</h1>
        <img src={img} alt = '' />
        <p>{description}</p>
        <a href={link}>{item}</a>
    </div>
  )
}

export default Main