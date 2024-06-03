import React from 'react'

export const WideImage = ({image,name}) => {
  return (
<div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <img src={image} alt={name} className="w-full" />
            </div>  )
}
