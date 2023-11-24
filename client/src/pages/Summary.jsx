import React from 'react'
import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Side from '../components/Side'
function Summary() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  
  return (
    <main>
      <Side />
      <div>Summary</div>
    </main>
    
  )
}

export default Summary