import sweetAlert from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';

export function noMetaMaskAlert() {
    sweetAlert({
      title: "Warning",
      text: "У Вас не установлен плагин Metamask к браузеру  <a href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn' target='blank'>Google Chrome</a>.",
      html: true,
      type: "warning"
    });
}

export function noContractDataAlert() {
    sweetAlert({
      title: "Warning",
      text: "Параметры краудсейл не заданы .Произошла ошибка. Пожалуйста, запустите конструктур заново",
      html: true,
      type: "warning"
    });
}

export function noContractAlert() {
    sweetAlert({
      title: "Warning",
      text: "Адрес не верный, контракт не найден",
      html: true,
      type: "warning"
    });
}

export function invalidCrowdsaleAddrAlert() {
    sweetAlert({
      title: "Warning",
      text: "Неверный адрес контракта краудсейл в настройках либо в запросе.",
      html: true,
      type: "warning"
    });
}

export function invalidNetworkIDAlert() {
    sweetAlert({
      title: "Warning",
      text: "Неверный идентификатор сети в настройках либо в запросе",
      html: true,
      type: "warning"
    });
}

export function successfulInvestmentAlert(tokensToInvest) {
    sweetAlert({
        title: "Успешно",
        text: "Поздравляем! Вы успешно приобрели " + tokensToInvest + " токенов!",
        html: true,
        type: "success"
    }, function() {
        window.location.reload();
    });
}

export function investmentDisabledAlert(startBlock, curBlock) {
    sweetAlert({
      title: "Warning",
      text: "Терпение мой друг, Краудсейл будет запущен после <b>" + startBlock + "</b> блока. Текущий блок <b>" + curBlock + "</b>.",
      html: true,
      type: "warning"
    });
}

export function investmentDisabledAlertInTime(startTime) {
    sweetAlert({
      title: "Warning",
      text: "Терпение мой друг, Краудсейл будет запущен <b>" + new Date(startTime) + "</b>.",
      html: true,
      type: "warning"
    });
}

export function incorrectNetworkAlert(correctNetworkName, incorrectNetworkName) {
    sweetAlert({
      title: "Warning",
      text: "Краудсейл размещён в сети <b>" + correctNetworkName + " network</b>. Но Вы авторизованы в <b>" + incorrectNetworkName + " network</b>. Please, change connection in MetaMask/Oracles plugin.",
      html: true,
      type: "warning"
    });
}

export function noDeploymentOnMainnetAlert() {
    sweetAlert({
      title: "Warning",
      text: "Конструктор в тестовой версии на Ethereum Mainnet. Пожалуйста воспользуйтесь сетями Kovan/Rinkeby/Oracles.",
      html: true,
      type: "warning"
    });
}

export function warningOnMainnetAlert(tiersCount, cb) {
  let n = 100 //fraction to round
    let estimatedCost = 1.0 / n * Math.ceil(n * tiersCount * 0.16)
    let estimatedTxsCount = tiersCount * 12
    sweetAlert({
      title: "Warning",
      text: "Вы собираетесь подписать " + estimatedTxsCount + " TXs. Metamask отобразит всплывающее окно для каждой транзакции. Внимание! Не запускайте два и более экземпляра конструктора одновременно! Конструктор создаст " + tiersCount + "-слой(я) краудсейла. Общей стоимостью примерно " + estimatedCost + " ETH. Вы уверены?",
      html: true,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: 'Да, вперёд!',
      cancelButtonText: "Нет, отменить!",
    },
    function(isConfirm) {
        if (isConfirm) {
          cb();
        }
    });
}
