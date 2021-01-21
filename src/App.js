import React from 'react';

import About from './Components/About/About';
import Appliances from './Components/Brands/Appliances/Appliances';
import Brands from './Components/Brands/Brands';
import Cabinets from './Components/Brands/Cabinets/Cabinets';
import ContactContainer from './Containers/ContactContainer/ContactContainer';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Kitchen from './Components/Work/KitchenProject/KitchenProject'
import Lighting from './Components/Brands/Lighting/Lighting';
import Message from './Components/Contact/Message/Message';
import Plumbing from './Components/Brands/Plumbing/Plumbing';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Services from './Components/Services/Services';
import ScrollToTop from './Containers/ScrollToTop/ScrollToTop';
import Tile from './Components/Brands/Tile/Tile';
import Works from './Components/Work/Works';


import './App.css';


class App extends React.Component {
  
  render() {


    return (
      <div className="App" >
        <div >
          <Router>
            <ScrollToTop>
            <Header />
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}


              <Route exact path="/" component={About} />

              <Route exact path="/brands" component={Brands} />

              <Route path="/brands/appliances" component={Appliances} />

              <Route path="/brands/cabinets" component={Cabinets} />

              <Route path="/brands/lighting" component={Lighting} />

              <Route path="/brands/plumbing" component={Plumbing} />

              <Route path="/brands/tile" component={Tile} />

              <Route path="/contact" component={ContactContainer} />

              <Route path="/faq" component={FAQ} />

              <Route path="/services" component={Services} />

              <Route exact path="/works" component={Works} />

            </Switch>

            <Footer />
            </ScrollToTop>
          </Router>
        </div>


      </div>
    );
  }
}
export default App;
