
/*容器组件：通过connect函数产生的组件，内部包含了UI（counter）组件*/
import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment, decrement} from '../redux/actions'

// 将外部的数据（即state对象）转换为UI组件的标签属性
function mapStateToProps(state){
  //返回的对象中的所有属性都会传递给包含UI组件
  return {count:state};
}

/*function mapDispatchToProps(dispatch){
  //返回的对象中的所有方法都会传递给包含UI组件
  return {
    increment(number){
      dispatch(increment(number))
    },
    decrement(number){
      dispatch(decrement(number))
    }
  }
}*/

// 将分发action的函数转换为UI组件的标签属性
const mapDispatchToProps={
  increment,decrement
};

// 用于包装 UI 组件生成容器组件
export default connect(
  mapStateToProps, //用来向UI组件传递一般属性
  mapDispatchToProps //用来向UI组件传递函数属性
)(Counter)

/*
//内部逻辑
class App{
    render(){
      return <Counter count={} increment={} decrement={}/>
    }
}
*/

