import React, { Component } from 'react';
import './style.css';

import hi from '../../images/hi_2.png';
import imJonathan from '../../images/im_jonathan.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="content">
          <img id="hi" src={hi} alt="Hi." />
          <img id="im-jonathan" src={imJonathan} alt="I'm Jonathan."></img>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
