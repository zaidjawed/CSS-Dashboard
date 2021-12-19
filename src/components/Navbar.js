import React from 'react';
import profile from '../img/realtor-2.jpeg'

export default function Navbar() {
   return (
      <div className="navbar">
         <div className="navbar-container">

            <div className="navbar__content">

               <div className="navbar__title">
                  <h1 className="navbar__head">Dashboard</h1>
                  <p className="navbar__p">Monday, <span>02 July 2021</span></p>
               </div>

               <div className="navbar__right">
                  

                  <div className="navbar__profile">
                     <span className="navbar__icon"><i class="fas fa-bell"></i></span>
                     <span className="navbar__name">John Bayer</span>
                     <span className="navbar__imgage"><img src={profile} alt="" className="navbar__img" /></span>
                  </div>

                  <div className="navbar__btns">
                     <a href="#" className="navbar__link"><i class="fas fa-plus"></i> Add</a>

                     <div className="navbar__input-box">
                        <input type="text" className="navbar__input" id="navbar-search" placeholder="Search for application here" />
                        <label htmlFor="navbar-search"><i class="fas fa-search"></i></label>
                     </div>
                  </div>

               </div>

            </div>

         </div>
      </div>
   )
}
