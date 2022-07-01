import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from "../../reducer/FoodReducer";

export default configureStore({
    reducer: {
        food: FoodReducer
    }
})