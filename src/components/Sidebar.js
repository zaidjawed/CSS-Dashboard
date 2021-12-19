import React from 'react';

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebar-container">

            <div className="sidebar__logo">
               <i class="fab fa-artstation"></i>
            </div>

            <div className="sidebar__content">
               <div className="sidebar__icon-box">
                  <div className="sidebar__icon sidebar__icon-active"><a href="#" className="sidebar__link sidebar__link-active"><i class="fas fa-home"></i></a></div>
                  <div className="sidebar__icon"><a href="#" className="sidebar__link"><i class="fas fa-signal"></i></a></div>
                  <div className="sidebar__icon"><a href="#" className="sidebar__link"><i class="fas fa-folder"></i></a></div>
                  <div className="sidebar__icon"><a href="#" className="sidebar__link"><i class="fas fa-user"></i></a></div>
                  <div className="sidebar__icon"><a href="#" className="sidebar__link"><i class="fas fa-calendar-week"></i></a></div>
                  <div className="sidebar__icon"><a href="#" className="sidebar__link"><i class="fas fa-sign-out-alt"></i></a></div>
               </div>

               <div className="sidebar__setting">
                  <div className="sidebar__icon"><a href="#" className="sidebar__link"><i class="fas fa-cog"></i></a></div>
               </div>
            </div>


         </div>
      </div>
   )
}
