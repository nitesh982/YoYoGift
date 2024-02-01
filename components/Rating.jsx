import React from 'react'

function Rating({rating}) {
    let grayStar = 5 - rating
    let stars = [1,2,3,4,5]
  return (
    <div className="rating">
        {stars.map(each=><input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked={each===rating} />)}
    </div>
  )
}

export default Rating