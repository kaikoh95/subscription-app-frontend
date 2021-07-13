import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;
const customerId: string = rootElement.getAttribute("data-customer-id") as string;
const subscriptionId: string = rootElement.getAttribute("data-subscription-id") as string;

ReactDOM.render(
  <React.StrictMode>
    <App customerId={customerId} subscriptionId={subscriptionId} />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
