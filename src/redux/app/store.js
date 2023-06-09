import cakereducer from '../feature/cake/cakeSlice/'
import {configureStore} from '@reduxjs/toolkit'
import icecreanreducer from '../feature/icecream/icecreamSlice'
import {createLogger} from 'redux-logger'

const logger = createLogger()

const store = configureStore({
    reducer:{
        cake:cakereducer,
        icecream:icecreanreducer
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export {store}