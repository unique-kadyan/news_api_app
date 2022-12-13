import React from 'react'

function NewSingle({item}) {
  return (
    
      <div className='col s2'>
        <div className='col s10'>
          <div className='card'>
        <div className='card-image'>
          <img src={item.urlToImage} alt={item.title} />
          <span className='card-title'>{item.source.name}</span>
        </div>
        <div className='card-content'>
          <p>{item.title}</p>
        </div>
        <div className='card-action'>
          <a href={item.url} target="_blank">Full Article</a>
        </div>
      </div>
        </div>
    </div>
    
  )
}

export default NewSingle