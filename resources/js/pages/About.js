import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1>About</h1>
      <p>About to my first Inertia.js app!</p>
      <p>{props.foo}</p>
    </div>
  )
}