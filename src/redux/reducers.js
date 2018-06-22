
import {ADD_COMMENT,DELETE_COMMENT} from './action-types'

const initComments=[
  {username:'Tom',content:'react学不会啊！'},
  {username:'Jack',content:'我也不会啊~'},
];
export function comments(state=initComments,action){
  console.log(action)
  switch (action.type){
    case ADD_COMMENT:
      const comment=action.data;
      console.log(comment)
      console.log([comment,...state])
      // state.unshift(comment); //纯函数，不能改变参数
      return [comment,...state];//把comment添加到state数组中，但是不能改变参数state
    case DELETE_COMMENT:
      const index=action.data;
      // state.splice(index,1); //纯函数，不能改变参数
      return state.filter((comment,i)=>i!==index); //用filter过滤产生新数组，不改变原数组
    default:
      return state;
  }
}