import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfIcecreams :20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers : {
        ordericecream : state => {
            state.numOfIcecreams--
        },
        restockedIcecream:(state,action) => {
            state.numOfIcecreams += action.payload
        }
    }
})

export default icecreamSlice.reducer
export  const {ordericecream,restockedIcecream} = icecreamSlice.actions