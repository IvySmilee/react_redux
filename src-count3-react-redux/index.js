
/*入口js*/
import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './containers/app'
import {count} from './redux/reducers'

//创建一个store对象:内部会第一次调用reducer产生初始状态
const store=createStore(count);

ReactDom.render((
  /*让所有组件都可以得到state数据*/
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'));
