import React from 'react';
import MainMid from './MainMid';
import MainRight from './MainRight';

export default function Main() {
   return (
      <div className="main">
         <div className="main-container">
            <MainMid />
            <MainRight />
         </div>
      </div>
   )
}
