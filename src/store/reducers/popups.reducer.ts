import { Action, Popups } from '../../types/types';
import {
  OPEN_POPUP_PROJECT,
  OPEN_POPUP_TOKEN,
  OPEN_POPUP_CONDITIONS
} from '../actions/popups.actions';


const initialState = {
  isProjectPopupOpen: false,
  isTokenPopupOpen: false,
  isConditionPopupOpen: false,
  }

export const popupsReducer = (
  state: Popups = initialState,
  action: Action<Popups>
) => {
  switch (action.type) {
    case OPEN_POPUP_PROJECT:
      return {
        ...state,
        isProjectPopupOpen: !state.isProjectPopupOpen,
        isTokenPopupOpen: false,
        isConditionPopupOpen: false,
      };
    case OPEN_POPUP_TOKEN:
      return {
        ...state,
        isProjectPopupOpen: false,
        isTokenPopupOpen: !state.isTokenPopupOpen,
        isConditionPopupOpen: false,
      };
    case OPEN_POPUP_CONDITIONS:
      return {
        ...state,
        isProjectPopupOpen: false,
        isTokenPopupOpen: false,
        isConditionPopupOpen: !state.isConditionPopupOpen,
      };
    default:
      return state;
  }
};

