import {SEND_DATA,ADD_TO_DATA } from '../Constant'

export const addToCart =(data)=>{
    return {
        type:SEND_DATA,
        data:data
    }
}


export const addDATA =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_DATA,
        data:data
    }
}