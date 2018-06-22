
/*入口js文件*/
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {count} from './redux/reducers'

//创建一个store对象,
//内部会第一次调用reducer产生初始状态
const store=createStore(count);

//封装渲染组件
function render(){
  ReactDOM.render((<App store={store}/>),document.getElementById('root'));
}
//初始渲染
render();
//状态改变后渲染
store.subscribe(render);
