
import React,{Component} from 'react'
import PropTypes from 'prop-types'

//引入../redux/actions 所有的东西，放到actions里面去，本身为对象，现在里面有两个函数
import * as actions from '../redux/actions'

export default class App extends Component{
  //通过store交互：获取状态，更新状态，自己没有，需要在index.js中传入属性
  static propTypes={
    store:PropTypes.object.isRequired
  };
  //计步器+选中值
  increment=()=>{
    const number=this.refs.numberSelect.value*1;
    //调用store.dispatch方法，传入（对应函数（传入选中值）返回的）action对象
    this.props.store.dispatch(actions.increment(number));
  };
  //计步器-选中值
  decrement=()=>{
    const number=this.refs.numberSelect.value*1;
    this.props.store.dispatch(actions.decrement(number));
  };
  //如果次数是奇数：计步器+选中值
  incrementIfOdd=()=>{
    const number=this.refs.numberSelect.value*1;
    //获取store里面的最新状态
    const count=this.props.store.getState();
    if(count%2===1){
      this.props.store.dispatch(actions.increment(number));
    }
  };
  //模拟异步加载：计步器+选中值
  incrementAsync=()=>{
    setTimeout(()=>{
      const number=this.refs.numberSelect.value*1;
      this.props.store.dispatch(actions.increment(number));
    },1000)
  };
  render () {
    /*通过store来获取状态*/
    const count=this.props.store.getState();
    return (
      <div>
        <p> click {count} times</p>
        <select ref="numberSelect">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
};