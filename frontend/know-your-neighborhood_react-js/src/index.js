import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import { Provider as AlertProvider } from 'react-alert'

const root = ReactDOM.createRoot(document.getElementById('root'));

const AlertTemplate = ({ style, options, message, close }) => (
  <div style={{ backgroundColor: 'white', padding: '20px' }}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <App />
    </AlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
reportWebVitals();
