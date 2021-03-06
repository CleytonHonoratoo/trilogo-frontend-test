import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import { openWarningModal } from '../../redux/Home/Home.action';
import './Columns.scss'


function Columns(props) {
  const {
    title,
    children,
    id,
  } = props;
  const dispatch = useDispatch();


  const drop = (event) => {
    event.preventDefault();
    const status = event.dataTransfer.getData('status');

    if (status === id) {
     dispatch(openWarningModal(status));
    }
  }

  const dragOver = useCallback(event => {
    event.preventDefault();
  }, []);

  return (
    <div
      className='column'
      onDrop={drop}
      onDragOver={dragOver}
    >
      <div className={`title ${id}`}>
        <span>{title}</span>
      </div>
      <div className='content'>
        {children}
      </div>
    </div>
  )
}

export default Columns;