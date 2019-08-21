import React from 'react'

export default function Welcome(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Welcome to my first Inertia.js app!</p>
      <p>{props.foo}</p>
    </div>
  )
}