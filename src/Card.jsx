import React from 'react'
import anh from './assets/OIP.webp'
import styles from './Button.module.css'

function Card() {
  return (
    <div className="card">
      <img src={anh} alt="Card Image"></img>
      <h2>Card Title</h2>
      <p>This is a description of the card content.</p>
      <button className={styles.button}>Learn More</button>
    </div>
  )
}

export default Card
