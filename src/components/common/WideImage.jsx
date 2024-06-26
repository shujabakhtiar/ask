import React from 'react'

export const WideImage = ({image,name}) => {
  return (
<div className="border-1 surface-border border-round m-2 text-center py-5 px-3 max-h-20vh object-scale-down home-img">
                <img src={image} alt={name} className="w-full" />
            </div>  )
}
