import { createSlice } from '@reduxjs/toolkit'

const modeSlice=createSlice({
    name:'modeSelect',
    initialState:{mode:"dark-mode"},
    reducers:{
        light : (state)=>{
            state.mode="light-mode";
        },
        dark :(state)=>{
            state.mode="dark-mode";
        }
    }

})

export const modeActions = modeSlice.actions;

export default modeSlice;
// const INITIAL_VALUE={
//     mode:"light-mode"
// }

// const modeReducer=(store=INITIAL_VALUE,action)=>{
//     if(action.type==='light'){
//         return {...store, mode:"light-mode"}
//     }
//     else if(action.type==='dark'){
//         return {...store, mode:"dark-mode"}
//     }
//     return store
// }

// const modeStore=configureStore({reducer:modeReducer})
// export default modeStore