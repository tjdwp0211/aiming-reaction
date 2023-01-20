import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  reducer as gameStateReducer,
  actions as gameStateAction,
} from "./gameState/reducer";

const store = configureStore({
  reducer: {
    gameState: gameStateReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export const dispatch = () => useDispatch<Dispatch>();
export type RootStore = ReturnType<typeof store.getState>;
export default store;

const { pullTrigger, reloadbullets } = gameStateAction;
export { pullTrigger, reloadbullets };
