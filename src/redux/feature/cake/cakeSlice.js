import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    numOfCakes:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers : {
        cakeorder : state => {
            state.numOfCakes--
        },
        cakeRestocked : (state,action) => {
            state.numOfCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const {cakeorder,cakeRestocked} = cakeSlice.actions