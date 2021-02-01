import React from 'react';
import './Columns.scss'


function Columns({title, status}) {

  return (
    <div className='column'>
      <div className={`title ${status}`}>
        <span>{title}</span>
      </div> 
    </div>
  )
}

export default Columns;