import { PROGRAMS_ACTIONS } from "../actionTypes/programsActionTypes";
import * as ProgramService from "../../services/programsService";

export const fetchPrograms = () => async (dispatch) => {
  try {
    const response = await ProgramService.fetchPrograms();
    dispatch({
      type: PROGRAMS_ACTIONS.FETCH_PROGRAMS_SUCCESS,
      payload: response.data.data.image,
    });
  } catch (error) {
    dispatch({
      type: PROGRAMS_ACTIONS.FETCH_PROGRAMS_FAILED,
      payload: error,
    });
  }
};
