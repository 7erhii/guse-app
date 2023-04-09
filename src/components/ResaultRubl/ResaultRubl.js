import App from '../../App';

import React, { useState } from 'react';


import { Link } from "react-router-dom";
import Close from "../../assets/images/Close-svg.svg";
import gus_kus from "../../assets/images/rubl_gus.svg";


// function PageActive() {
//    const [isActive, setActive] = useState(false);

//    const toggleClass = () => {
//       setActive(!isActive);
//    };

//    return (
//       <div className={`choose__page-card choose__page-card_active-mckv ${isActive ? 'active' : ''}`} onClick={toggleClass}>
         
//       </div>
//    );
// }

function ResaultRubl() {
   return (
      <div className="choose">
         <div className="choose__resault-page">
            <div className="choose__page-close">
               <Link to={'/ChoosePage'}><img src={Close} className="choose__page-close-img" alt="logo" /></Link>
            </div>
         <div className="choose__page-title">Слава Україні</div>
         <div className="choose__page-descr">Ваш гусак успішно запущений</div>
         <div className="choose__page-resault-card">
            <div className="choose__page-resault-card">
               <img src={gus_kus} className="choose__page-resault-card-img" alt="logo" />
               <p className="choose__page-resault-card-text">Очікуйте гучного «свєрх-тратата» по позиції найближчим часом</p>
            </div>
         </div>
         <div className="choose__page-btn choose__page-btn_active">
            <button disabled className="resault__page-btn-btn">Переглянути карту</button>
         </div>
      </div>
   </div>
   );
}




export default ResaultRubl;
