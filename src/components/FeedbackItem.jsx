import { useState } from 'react'
import React  from 'react';


function FeedbackItem() {
  // eslint-disable-next-line
  const [rating, setRating] = useState(7)
  // eslint-disable-next-line
  const [tekst, setTekst] = useState("This is an example of a feedback item")

  

  return (
    <div classname="card">
      <div className="num-display">{rating}</div>
<div className="text-display">{tekst}</div>
    </div>
  )
}

export default FeedbackItem