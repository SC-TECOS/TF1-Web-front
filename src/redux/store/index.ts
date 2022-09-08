import { combineReducers } from "redux";
import programs, { ProgramState } from "../reducers/programs/programs.reducer";

export interface IRootState {
  readonly programs: ProgramState;
}
const rootReducer = combineReducers<IRootState>({
  programs,
});

export default rootReducer;
