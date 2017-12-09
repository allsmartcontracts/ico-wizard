import React, { Component } from 'react';
import {Header} from './components/index'
import '../../assets/stylesheets/application.css';
import { Link } from 'react-router-dom'
import {injectIntl} from "react-intl"
import {inject,observer} from "mobx-react"
import {formatMessage} from 'format-message'
addLocaleData([...ruLocale, ...enLocale]);

          
export class Home extends Component {
  render() {
    return (
      <div>
        <section className="home">
          <div className="crowdsale">
            <div className="container">
              <h1 className="title">{formatMessage({id: "Home_title1"})}</h1>
              <p className="description">
              {formatMessage({id: "Home_desc1"})}<br/>{formatMessage({id: "Home_desc11"})}
              </p>
              <div className="buttons">
                <Link to='/1'><a className="button button_fill">{formatMessage({id: "Home_Butt1"})}</a></Link>
              </div>
            </div>
          </div>
          <div className="process">
            <div className="container">
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-contract"></div>
                <p className="title">{formatMessage({id: "Home_title_contract"})}</p>
                <p className="description">
                  {formatMessage({id: "Home_desc_contract"})}
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_token-setup"></div>
                <p className="title">{formatMessage({id: "Home_title_token"})}</p>
                <p className="description">
                  {formatMessage({id: "Home_desc_token"})}
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-setup"></div>
                <p className="title">Crowdsale Setup</p>
                <p className="description">
                  Setup tiers and crowdsale parameters
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_publish"></div>
                <p className="title">Publish</p>
                <p className="description">
                  Get generated code and artifacts for verification in Etherscan
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-page"></div>
                <p className="title">Crowdsale Page</p>
                <p className="description">
                  Bookmark this page for the campaign statistics
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default injectIntl(observer(Home));
