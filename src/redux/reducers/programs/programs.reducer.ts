import { PROGRAMS_ACTIONS } from "../../actionTypes/programsActionTypes";

interface IState {
  programs: IProgram[];
  isLoading: boolean;
}

interface IProgram {
  id: string;
  url: string;
}

const initialState: IState = {
  programs: [],
  isLoading: true,
};

export type ProgramState = Readonly<typeof initialState>;

const programsReducer = (
  state: ProgramState = initialState,
  action: { payload: any; type: any }
) => {
  const { payload, type } = action;
  switch (type) {
    case PROGRAMS_ACTIONS.FETCH_PROGRAMS_STARTED:
      return { ...state, programs: payload, isLoading: true };
    case PROGRAMS_ACTIONS.FETCH_PROGRAMS_SUCCESS:
      return { ...state, programs: payload, isLoading: false };
    case PROGRAMS_ACTIONS.FETCH_PROGRAMS_FAILED:
    default:
      return state;
  }
};

export default programsReducer;
