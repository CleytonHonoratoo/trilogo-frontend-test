import React from 'react';

import './Field.scss';

function Field({ 
  label,
  required,
  children,
}) {
  return (
    <div className='Field'>
      <div className={required ? 'label required' : 'label'}>
        { label }
      </div>

      <div className="field">
        { children }
      </div>
    </div>
  );
}

export default Field;