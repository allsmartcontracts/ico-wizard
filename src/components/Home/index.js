import React, { Component } from 'react';
import '../../assets/stylesheets/application.css';
import { getWeb3, getNetworkVersion } from '../../utils/blockchainHelpers'
import { Link } from 'react-router-dom'
import { defaultState } from '../../utils/constants'
import { noDeploymentOnMainnetAlert } from '../../utils/alerts'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState
  }

  render() {
    return (
      <div>
        <section className="home">
          <div className="crowdsale">
            <div className="container">
              <h1 className="title">Конструктор ICO</h1>
              <p className="description">
              Конструктор ICO позволяет выпустить собственный токен и разместить контракт ICO всего за 5 шагов. С помощью нашего Конструктора Вы сможете запустить компанию по сбору средств(краудсейл) в блокчейне Ethereum, верифицировать контракты токена и ICO  на Etherscan, получить страницу отображающую ход компании по сбору средств и страницу участия в ICO 
              <br/>Смарт контракты основаны на коде <a href="https://github.com/TokenMarketNet/ico">TokenMarket</a>. 
              </p>
              <div className="buttons">
                <Link to={{ pathname: '/1', query: { state: this.state } }}><a className="button button_fill">Новая кампания</a></Link>
              </div>
            </div>
          </div>
          <div className="process">
            <div className="container">
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-contract"></div>
                <p className="title">Контракт краудсейл</p>
                <p className="description">
                  Выберете сценарий
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_token-setup"></div>
                <p className="title">Параметры токена</p>
                <p className="description">
                  Настраивайте и резервируйте токены
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-setup"></div>
                <p className="title">Параметры кампании</p>
                <p className="description">
                  Создавайте слои и задавайте параметры
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_publish"></div>
                <p className="title">Публикация</p>
                <p className="description">
                  Получите код и метаданные для верификации в Etherscan
                </p>
              </div>
              <div className="process-item">
                <div className="step-icons step-icons_crowdsale-page"></div>
                <p className="title">Страница кампании</p>
                <p className="description">
                  Добавьте в избранное для мониторинга статистики
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
