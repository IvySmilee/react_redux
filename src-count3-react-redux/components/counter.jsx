
import React,{Component} from 'react'
import PropTypes from 'prop-types'

/*
UI组件
  count
  increment()
  decrement()
 */
export default class App extends Component{
  //需要在app.jsx中传入属性
  static propTypes={
    count:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired
  };
  //计步器+选中值
  increment=()=>{
    const number=this.refs.numberSelect.value*1;
    this.props.increment(number);
  };
  //计步器-选中值
  decrement=()=>{
    const number=this.refs.numberSelect.value*1;
    this.props.decrement(number);
  };
  //如果次数是奇数：计步器+选中值
  incrementIfOdd=()=>{
    const number=this.refs.numberSelect.value*1;
    const count=this.props.count;
    if(count%2===1){
      this.props.increment(number);
    }
  };
  //模拟异步加载：计步器+选中值
  incrementAsync=()=>{
    setTimeout(()=>{
      const number=this.refs.numberSelect.value*1;
      this.props.increment(number);
    },1000)
  };
  render () {
    const count=this.props.count;
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