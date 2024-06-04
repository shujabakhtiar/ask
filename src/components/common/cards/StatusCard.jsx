    import React from 'react'
    
    export const StatusCard = ({items}) => {
      return (
        <div className='flex flex-wrap md:flex-col'>
        {items.map((item, index) => (
            <div key={index} className='flex flex-col py-5 text-left px-5'>
                <span className='text-gray'>{item.title}</span>
                <span>{item.info}</span>
            </div>
        ))}
    </div>
      )
    }
    