
/*包含n个action create函数的对象*/

//引入action-type
import {INCREMENT,DECREMENT} from './action-type'

/*同步增减减少action对象*/
//定义增加action对象的函数
export const increment=(number)=>({type:INCREMENT,number});
//必须写number，需要与reducer 中的action.number 一致

//定义减少action对象的函数
export const decrement=(number)=>({type:DECREMENT,number});

/*异步增加减少action对象,返回一个函数*/
export function incrementAsync (number){
  return function (dispatch){
    //执行异步代码，执行完成后分发一个同步action对象
    setTimeout(()=>{
      dispatch(increment(number));
    },1000)
  }
}

/*// 异步action creator(返回一个函数)
export const incrementAsync = number => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(number))
    }, 1000)
  }
}*/
