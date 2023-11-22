import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const Dashboard = () => {
    const [isSidebar, setIsSidebar] = useState(false);

  const sidebar = () => {
    setIsSidebar(!isSidebar);
  
  };

  return (
    <div className='d-flex '>
      <div className='col-xl-2'>
        <Sidebar sidebar={sidebar} />
      </div>
      <div className='col-xl-10 '>
        <Header sidebar={sidebar} />
        <div className='mainDiv p-4'>
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
