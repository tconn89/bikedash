import React from 'react';
// import {Typography} from '@rmwc/typography';

export default class CustomerPrices extends React.Component {
  low = { details: getPriceDetails('low')}
  medium = { details: getPriceDetails('medium')}
  high = { details: getPriceDetails('high')}
  priceHead(name, price){
    return (
      <div class="pricing-head">
        <h4>{name}</h4>
        <h1 style={{fontWeight: 'normal'}}>{price} BTC</h1>
        <h6>Per Month</h6>
      </div>
    )
  }
  render() {
    return (
      <div id="pricing-section" class="gray-bg">
        <div class="container">
          <div class="row pricing-col">
            <div class="col-sm-4 pricebox1">
              <div class="pricing-box">
                {this.priceHead('Startup',2)}
                <div class="pricing-body">
                  <ul>
                    {this.low.details.map((detail,i) => <li key={i}>{detail}</li>)}
                  </ul>
                  <a href="/fake">buy now</a>
                  <span/>
                </div>
              </div>
            </div>
            <div class="col-sm-4 pricebox2">
              <div class="pricing-box popular">
                  {this.priceHead('Best Value', 5)}
                <div class="pricing-body">
                  <ul>
                    {this.medium.details.map((detail,i) => <li key={i}>{detail}</li>)}
                  </ul>
                  <a href="/fake">buy now</a>
                  <span />
                </div>
              </div>
            </div>
            <div class="col-sm-4 pricebox3">
              <div class="pricing-box">
                  {this.priceHead('Enterprise', 10)}
                <div class="pricing-body">
                  <ul>
                    {this.high.details.map((detail,i) => <li key={i}>{detail}</li>)}
                  </ul>
                  <a href="/fake">buy now</a>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}
  
function getPriceDetails(prices){
  if(prices === 'low')
    return ['GPS Tracking', 'Dashboard Analytics']
  if(prices === 'medium')
    return ['Customer Support', 'Fleet Management', ]
  if(prices === 'high')
    return ['Custom Development', 'Feature Requests', '']
  return [];
}