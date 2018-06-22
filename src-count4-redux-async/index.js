
/*入口js*/
import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import App from './containers/app'
import {count} from './redux/reducers'

//根据counter函数创建store对象:内部会第一次调用reducer产生初始状态
const store=createStore(
  count,
  composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
  );

ReactDom.render((
  /*让所有组件都可以得到state数据*/
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'));
