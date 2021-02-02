import React from 'react';
import './Columns.scss'


function Columns({title, status, children}) {
  return (
    <div className='column'>
      <div className={`title ${status}`}>
        <span>{title}</span>
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default Columns;