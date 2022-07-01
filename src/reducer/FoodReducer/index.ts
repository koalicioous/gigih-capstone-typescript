import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { FoodInitialData } from './data'

type Food = {
    id: string,
    name: string,
    image: string,
    description: string,
    amount: number,
    typeOfAmount: string,
    expiration: string,
    type: string[],
    address: string,
    city: string,
}

const foodData: Food[] = FoodInitialData

const initialState = foodData

export const foodSlice = createSlice({
    name: 'food',
    initialState: initialState,
    reducers: {
        addFood: (state, action: PayloadAction<Food>) => {
            state.push(action.payload)
        }
    }
})

export const { addFood } = foodSlice.actions
export const useAppSelector: TypedUseSelectorHook<typeof initialState> = useSelector
export default foodSlice.reducer