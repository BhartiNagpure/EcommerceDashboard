import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faTimes, faAlignLeft, faRocket, faFileSignature, faCompassDrafting, faQrcode, faShareNodes, faFileLines, faBookmark, faLayerGroup, faLocationDot, faUser, faRuler, faChartBar, faMap, faCog, faTable, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Sidebar({ sidebar }) {
  const [accordionOpen1, setAccordionOpen1] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);
  const [accordionOpen4, setAccordionOpen4] = useState(false);
  const [accordionOpen5, setAccordionOpen5] = useState(false);
  const [accordionOpen6, setAccordionOpen6] = useState(false);
  const [accordionOpen7, setAccordionOpen7] = useState(false);
  const [accordionOpen8, setAccordionOpen8] = useState(false);
  const [accordionOpen9, setAccordionOpen9] = useState(false);
  const [accordionOpen10, setAccordionOpen10] = useState(false);
  const [accordionOpen11, setAccordionOpen11] = useState(false);
  const [accordionOpen12, setAccordionOpen12] = useState(false);
  const [accordionOpen13, setAccordionOpen13] = useState(false);
  const [accordionOpen14, setAccordionOpen14] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleAccordion1 = () => {
    setAccordionOpen1(!accordionOpen1);
  };
  const toggleAccordion2= () => {
    setAccordionOpen2(!accordionOpen2);
  };
  const toggleAccordion3= () => {
    setAccordionOpen3(!accordionOpen3);
  };
  const toggleAccordion4= () => {
    setAccordionOpen4(!accordionOpen4);
  };
  const toggleAccordion5= () => {
    setAccordionOpen5(!accordionOpen5);
  };
  const toggleAccordion6= () => {
    setAccordionOpen6(!accordionOpen6);
  };
  const toggleAccordion7= () => {
    setAccordionOpen7(!accordionOpen7);
  };
  const toggleAccordion8= () => {
    setAccordionOpen8(!accordionOpen8);
  };
  const toggleAccordion9= () => {
    setAccordionOpen9(!accordionOpen9);
  };
  const toggleAccordion10= () => {
    setAccordionOpen10(!accordionOpen10);
  };
  const toggleAccordion11= () => {
    setAccordionOpen11(!accordionOpen11);
  };
  const toggleAccordion12= () => {
    setAccordionOpen12(!accordionOpen12);
  };
  const toggleAccordion13= () => {
    setAccordionOpen13(!accordionOpen13);
  };
  const toggleAccordion14= () => {
    setAccordionOpen14(!accordionOpen14);
  };
  return (
    <div>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FontAwesomeIcon icon={faTimes} className='text-muted' />
        ) : (
          <FontAwesomeIcon icon={faAlignLeft}  className='text-muted'/>
        )}
      </button>

      <div className={`sidebar-container p-3 ${isSidebarOpen ? 'isSidebar' : ''} `} >
        <div className='text-center'>
          <img src="https://raksoftech.com/img/demos/it-services/logo.png" alt='' className='w-50 ' />
        </div>
        <div className='menuItem menuTitle'>MENU</div>
        <div className={`dropdown py-2 px-2 `}>
          <label
            id="dropdownMenuButton"
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="sidebaricon" />
            <span className="menuItem px-4 ">Dashboards</span>
          </label>
          <span className="dropdownBtn" onClick={toggleAccordion1}>
            <FontAwesomeIcon icon={faChevronDown} className="sidebaricon" />
          </span>
          <div className={`collapse ${accordionOpen1 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-2 px-2'>
          <label>
            <FontAwesomeIcon icon={faQrcode} className='sidebaricon' />
            <span className='menuItem px-4'>Apps</span>
          </label>
          <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion2} /></span>
          <div className={`collapse ${accordionOpen2 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='menuItem menuTitle'>PAGES </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faUser} className='sidebaricon' />
          <span className='menuItem px-4'>Authentication</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion3} /></span>
        <div className={`collapse ${accordionOpen3 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faFileLines} className='sidebaricon' />
          <span className='menuItem px-4'>Pages</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion4}/></span>
        <div className={`collapse ${accordionOpen4 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faRocket} className='sidebaricon' />
          <span className='menuItem px-4'>Landing</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion5} /></span>
        <div className={`collapse ${accordionOpen5 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='menuItem menuTitle'>COMPONENTS</div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faRuler} className='sidebaricon' />
          <span className='menuItem px-4'>Base UI</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion6}/></span>
        <div className={`collapse ${accordionOpen6 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faLayerGroup} className='sidebaricon' />
          <span className='menuItem px-4'>Advance UI</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion7}/></span>
        <div className={`collapse ${accordionOpen7 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faBookmark} className='sidebaricon' />
          <span className='menuItem px-4'>Widgets</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion8}/></span>
        <div className={`collapse ${accordionOpen8 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faFileSignature} className='sidebaricon' />
          <span className='menuItem px-4'>Forms</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion9} /></span>
        <div className={`collapse ${accordionOpen9 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faTable} className='sidebaricon' />
          <span className='menuItem px-4'>Tables</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion10}/></span>
        <div className={`collapse ${accordionOpen10 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faChartBar} className='sidebaricon' />
          <span className='menuItem px-4'>Charts</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion11}/></span>
        <div className={`collapse ${accordionOpen11 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faCompassDrafting} className='sidebaricon' />
          <span className='menuItem px-4'>Icons</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon  ' onClick={toggleAccordion12}/></span>
        <div className={`collapse ${accordionOpen12 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faLocationDot} className='sidebaricon' />
          <span className='menuItem px-4'>Maps</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon ' onClick={toggleAccordion13} /></span>
        <div className={`collapse ${accordionOpen13 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
      <div className='py-2 px-2'>
        <label>
          <FontAwesomeIcon icon={faShareNodes} className='sidebaricon' />
          <span className='menuItem px-4'>Multi Level</span>
        </label>
        <span className='dropdownBtn'><FontAwesomeIcon icon={faChevronRight} className='sidebaricon ' onClick={toggleAccordion14}/></span>
        <div className={`collapse ${accordionOpen14 ? 'show' : ''}`} id="collapseOne">
            <div className="card-body">
              <ul className="flex-column text-white">
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 1</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 2</li>
                <li className="dropdown-item"><span className='fs-22'>-</span> Subitem 3</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
    </div >
  )
}
