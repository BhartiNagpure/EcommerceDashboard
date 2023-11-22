import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faSearch, faShoppingBag, faThLarge, faExpand, faMoon, faBell } from "@fortawesome/free-solid-svg-icons";


export default function Header({sidebar}) {


  return (
    <div className='header d-flex px-4 py-2 justify-content-between position-fixed bg-white z-1 '>
      <div className='d-flex my-2'>
        <div className='p-2 barIcon ' >
          <FontAwesomeIcon icon={faAlignLeft} onClick={sidebar}/>
        </div>
        <div className='searchbar '>
          <FontAwesomeIcon icon={faSearch} className='headerIcon px-2 ' />
          <input type='search' placeholder='Search...' />
        </div>
      </div>
   
        <div className='headericonDiv'>
          <button>
            <img src='https://flaglane.com/download/betsy-ross-flag/betsy-ross-flag-small.png' />
          </button>
          <button className='p-2 mx-2 btn header-btn'>
            <FontAwesomeIcon icon={faThLarge} className='headerIcon fs-5' />
          </button>
          <button className='p-2 mx-2 btn header-btn'>
            <button className='bagCount'>5</button>
            <FontAwesomeIcon icon={faShoppingBag} className='headerIcon fs-5' />
          </button>
          <button className='p-2 mx-2  btn header-btn'>
            <FontAwesomeIcon icon={faExpand} className='headerIcon fs-5' />
          </button>
          <button className='p-2 mx-2 btn header-btn'>
            <FontAwesomeIcon icon={faMoon} className='headerIcon fs-5' />
          </button>
          <button className='p-2 mx-2 btn header-btn'>
            <button className='bagCount bellCount'>3</button>
            <FontAwesomeIcon icon={faBell} className='headerIcon fs-5' />
          </button>
          <button type="button" aria-haspopup="true" className="btn" aria-expanded="false">
          <span className="d-flex align-items-center profileDiv">
            <img className="rounded-circle header-profile-user" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="" />
            <span className="text-start ms-xl-2">
              <span className=" d-xl-inline-block ms-1 fw-medium user-name-text">Admin</span>
              <span className=" d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
            </span></span></button>
      
      </div>
    </div>
  )
}
