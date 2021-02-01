import React from 'react';
import Routes from './router';
import { LocaleProvider } from 'antd'
import ptBR from 'antd/lib/locale-provider/pt_BR';
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import './global.scss';

import configureStore from './redux/configureStore';

const { store } = configureStore();
const App = () => {
    return (
      <Provider store={store}>
        <LocaleProvider locale={ptBR}>
          <Routes />
        </LocaleProvider>
      </Provider>
    );
}

export default App;