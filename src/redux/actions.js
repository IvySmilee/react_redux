
import {ADD_COMMENT,DELETE_COMMENT} from './action-types'

//同步添加、删除的action对象
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment});
export const deleteComment=(index)=>({type:DELETE_COMMENT,data:index});
