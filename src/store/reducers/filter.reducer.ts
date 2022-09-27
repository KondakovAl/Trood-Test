import { Action, Filters, FiltersDispatch } from '../../types/types';
import {
  SET_CLEAR,
  SET_CONDITIONS_TYPE,
  SET_PROJECT_STATUS,
  SET_PROJECT_TYPE,
  SET_PROJECT_TYPE_ALL,
  SET_TOKEN_TYPE,
  SET_TOKEN_TYPE_ALL,
  SET_VOLUME_STATUS,
} from '../actions/filter.actions';

const initialState = {
  project: {
    status: '',
    type: '',
  },
  token: {
    type: '',
  },
  conditions: {
    type: '',
  },
  volume: { status: '' },
};

export const filterReducer = (
  state: Filters = initialState,
  action: Action<FiltersDispatch>
) => {
  switch (action.type) {
    case SET_PROJECT_STATUS:
      return {
        ...state,
        project: {
          status: action.payload.projectStatus,
          type: state.project.type,
        },
        volume: { status: '' },
      };
    case SET_PROJECT_TYPE:
      return {
        ...state,
        project: {
          status: state.project.status,
          type: action.payload.projectType,
        },
      };
    case SET_PROJECT_TYPE_ALL:
      return {
        ...state,
        project: {
          status: state.project.status,
          type: '',
        },
      };
    case SET_TOKEN_TYPE:
      return {
        ...state,
        token: { type: action.payload.tokenType },
      };
    case SET_TOKEN_TYPE_ALL:
      return {
        ...state,
        token: { type: '' },
      };
    case SET_CONDITIONS_TYPE:
      return {
        ...state,
        conditions: { type: action.payload.conditionsType },
      };
    case SET_VOLUME_STATUS:
      return {
        ...state,
        project: { status: '', type: state.project.type },
        volume: { status: action.payload.volumeStatus },
      };
    case SET_CLEAR:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

