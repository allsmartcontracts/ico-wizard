import React, { Component } from 'react';
import './assets/stylesheets/application.css';
import { Header, Footer, Home, stepOne, stepTwo, stepThree, stepFour, Crowdsale, Invest } from './components/index'
import { getQueryVariable } from './utils/utils'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AlertContainer from 'react-alert'
import { TOAST } from './utils/constants'
import { toast } from './utils/utils'
import {MobxIntlProvider, LocaleStore} from "mobx-react-intl"
import {addLocaleData} from "react-intl"
import en from "./translations/en"
import ru from "./translations/ru"

import enLocale from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';
addLocaleData([...ruLocale, ...enLocale]);
const localeStore = new LocaleStore("en", {en, ru});
    const store = {
    locale: localeStore,
};

console.log('stepThree', stepThree, 'stepTwo', stepTwo)
class App extends Component {
  render() {
    var crowdsaleAddr = getQueryVariable("addr");
    
    return (
      <Router>
      <Provider {...store}>
        <MobxIntlProvider>
        <div>
          <Header/>
          <Route exact path="/" component={crowdsaleAddr?Crowdsale:Home}/>
          <Route exact path="/crowdsale" component={Crowdsale}/>
          <Route exact path="/invest" component={Invest}/>
          <Route path="/1" component={stepOne}/>
          <Route path="/2" component={stepTwo}/>
          <Route path="/3" component={stepThree}/>
          <Route path="/4" component={stepFour}/>
          <Footer/>
          <AlertContainer ref={a => toast.msg = a} {...TOAST.DEFAULT_OPTIONS} />
        </div>
      </MobxIntlProvider>
    </Provider>
      </Router>
    )
  }
}

export default App;
