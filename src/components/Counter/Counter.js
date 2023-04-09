// import './AboutPage.scss';
// import Header from '../Header/Header';
// import Page from "../HomePage/HomePage";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

import choose__page__clos__img from "../../assets/images/Close-svg.svg";
import mackwa from "../../assets/images/mackwa.svg";
import bunker from "../../assets/images/bunker.svg";
import chirik from "../../assets/images/chrik.svg";
import rubl from "../../assets/images/rubl.svg";


// function PageActive() {
//    const [isActive, setActive] = useState(false);

//    const toggleClass = () => {
//       setActive(!isActive);
//    };

//    return (
//       <div className={`choose__page-card choose__page-card_active-mckv ${isActive ? 'active' : ''}`} onClick={toggleClass}>
//          <img src={mackwa} className="choose__page-card-img" alt="logo" />
//          <p className='choose__page-card-text'>На мацкву</p>
//       </div>
//    );
// }

function ChoosePage() {
   const [isActiveIndex, setActiveIndex] = useState(null);

   const toggleClass = (activeIndex) => {
      if (activeIndex===isActiveIndex) {
         setActiveIndex(null);
      } else {
         setActiveIndex(activeIndex);
      }
      
   };

   function GoToResaultPage() {
      const navigate = useNavigate();
    
      function handleClick() {
      //   navigate("/home");
      } if (isActiveIndex===0) {
         navigate("/home");
      } else { 
         navigate("/home");
      }
    
      return (
        <button type="button" onClick={handleClick}>
          Go home
        </button>
      );
    }
   

   return (
      <div className='page'> 
         <div className='choose'>
            <div className='choose__page'>
               <div className='choose__page-close'>
                  <Link to={'/'}><img src={choose__page__clos__img} className="choose__page-close-img" alt="logo" /></Link>
               </div>
               <div className='choose__page-title'>Ваші результати</div>
               {/* <div className='choose__page-descr'>Гусак атакує обрану позицію зброєю високоточного влучання</div> */}
               <div className='choose__page-cards'>
                  <div className='counter__card resault__mskv'>
                     Вилетіло гусей до Москі
                  </div>
                  <div className='counter__card resault__rubl'>
                     Вилетіло гусей до банків
                  </div>
                  <div className='counter__card resault__chirik'>
                     Вилетіло гусей с мапами
                  </div>
                  <div className='counter__card resault__bunker'>
                     Вилетіло гусей до буркерів
                  </div>

                  

                  
                     {/* <div className={`choose__page-card choose__page-card_active-mckv ${isActiveIndex===0 ? 'active' : ''}`} 
                                    onClick={() => toggleClass(0)}>
                        <img src={mackwa} className="choose__page-card-img" alt="logo" />
                        <p className='choose__page-card-text'>На мацкву</p>
                     </div>
                  
                     <div className={`choose__page-card choose__page-card_active-bunker ${isActiveIndex===1 ? 'active' : ''}`} 
                                    onClick={() => toggleClass(1)}>
                        <img src={bunker} className="choose__page-card-img" alt="logo" />
                        <p className='choose__page-card-text'>На бункер</p>
                     </div>
                     <div className={`choose__page-card choose__page-card_active-mckv ${isActiveIndex===2 ? 'active' : ''}`} 
                                    onClick={() => toggleClass(2)}>
                        <img src={chirik} className="choose__page-card-img" alt="logo" />
                        <p className='choose__page-card-text'>На чик-чирика</p>
                     </div>
                     <div className={`choose__page-card choose__page-card_active-mckv ${isActiveIndex===3 ? 'active' : ''}`} 
                                    onClick={() => toggleClass(3)}>
                        <img src={rubl} className="choose__page-card-img" alt="logo" />
                        <p className='choose__page-card-text'>На курс рубля</p>
                     </div> */}
               </div>
                  <div className='choose__page-btn '>
                     <button disabled={isActiveIndex === null } className="counter__page-btn-btn" >Знову до лабораторії</button>


                  </div>
            </div>
         </div>
      </div>
   );
}




export default ChoosePage;
