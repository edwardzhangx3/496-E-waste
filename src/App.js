import React, { Component } from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import webData from './webData';
import Photos from './components/Photos'
import AdvisorPhotos from './components/AdvisorPhotos'
import NewPortfolio from './components/NewPortfolio'
import History from './components/History'
import Solutions from './components/Solutions'
import Flow from './components/Timeline'
import References from './components/References'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header webData={webData}/>
        <Mission webData={webData}/>
        <NewPortfolio webData={webData}/>
        <History/>
        <Solutions webData={webData}/>
        <Flow/>
        <Photos />
        <AdvisorPhotos />
        <Testimonials webData={webData}/>
        <References />
        <ContactUs webData={webData}/>
        <Footer webData={webData}/>
      </div>
    );
  }
}

export default App;

