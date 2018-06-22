
/*创建n个包含reducer 函数的对象
*   reducer 函数：根据老的state和指定的action，返回一个新的state
* */

//引入action-type
import {INCREMENT,DECREMENT} from './action-type'

//state是上面总和，number是下拉菜单选中的值
export function count(state=0,action){
  console.log('count()',state,action);
  //判断action的类型，对应返回新的state
  switch (action.type){
    case INCREMENT:
      return state+action.number;
    case DECREMENT:
      return state-action.number;
    default:
      return state;
  }
}
