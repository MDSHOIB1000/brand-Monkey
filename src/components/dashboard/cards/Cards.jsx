import React from 'react'
import CardL from './card/CardL'
import CardR from './card/CardR'

function Cards({cardObj,onChange,data}) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mt-20 mb-2">
      <CardL cardObj={cardObj}/>
      <CardR onChange={onChange} data={date} />
    </div>
  )
}

export default Cards
