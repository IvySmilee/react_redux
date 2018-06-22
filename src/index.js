/*入口js文件*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

//引入主组件模块
import App from './components/app/app'
import store from './redux/store'

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'));
