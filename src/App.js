import React, {Component} from 'react';
import './assets/stylesheets/application.css';
import { Header, Footer, Home, Crowdsale, Invest } from './components/index'
import { getQueryVariable } from './utils/utils'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AlertContainer from 'react-alert'
import { TOAST } from './utils/constants'
import { toast } from './utils/utils'

class App extends Component {
  render() {
    var crowdsaleAddr = getQueryVariable("addr");
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={crowdsaleAddr?Crowdsale:Home}/>
          <Route exact path="/crowdsale" component={Crowdsale}/>
          <Route exact path="/invest" component={Invest}/>
          <Footer/>
          <AlertContainer ref={a => toast.msg = a} {...TOAST.DEFAULT_OPTIONS} />
        </div>
      </Router>
    )
  }
}

export default App;
