import React from 'react'

export default function Card_features({ title, emoji, description }) {
    return (
    <div class="feature-card">
           <div class="feature-icon">{emoji}</div>
            <h3>{title}</h3>
            <p>{description}</p>
           </div>
  )
}
