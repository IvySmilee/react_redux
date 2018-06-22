
/*包含n个action create函数的对象*/

//引入action-type
import {INCREMENT,DECREMENT} from './action-type'

//定义增加action对象的函数
export const increment=(number)=>({type:INCREMENT,number});
//必须写number，需要与reducer 中的action.number 一致

//定义减少action对象的函数
export const decrement=(number)=>({type:DECREMENT,number});