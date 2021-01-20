import React from 'react';
import Design from './Design/Design';
import HDS from './HDS/HDS';
import Upgrade from './Upgrade/Upgrade';



import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
  return (
    <div className="cont" >

      <Design  />
      <Upgrade />
      <HDS />
      
      
    </div>

  )
}

export default Home;