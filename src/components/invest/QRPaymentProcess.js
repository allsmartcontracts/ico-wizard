import React from 'react'
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const QRPaymentProcess = ({ crowdsaleAddress }) => {
  return (
    <div>
      <div className="payment-process">
          <div className="payment-process-qr">
            <QRCode value={crowdsaleAddress}></QRCode>
          </div>
        <p className="payment-process-hash">
          { crowdsaleAddress }
        </p>

        <CopyToClipboard text={crowdsaleAddress}>
          <a href="" onClick={e => e.preventDefault()} className="payment-process-copy">Копировать адрес</a>
        </CopyToClipboard>

        {/* <div className="payment-process-loader">Waiting for payment</div> */}
        <div className="payment-process-notation">
          <p className="payment-process-notation-title">ВНИМАНИЕ!</p>
          <p className="payment-process-notation-description">
            Отправка ETH на адрес кампании только с MethodID: 0xa6f2ae3a
          </p>
        </div>
      </div>
     
    </div>
  )
}

export default QRPaymentProcess;

