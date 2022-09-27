import {
  SET_PROJECT_STATUS,
  SET_PROJECT_TYPE,
  SET_TOKEN_TYPE,
  SET_CONDITIONS_TYPE,
  SET_VOLUME_STATUS,
  SET_CLEAR,
  SET_PROJECT_TYPE_ALL,
  SET_TOKEN_TYPE_ALL
} from '../actions/filter.actions';

export const setProjectStatus = (projectStatus: string) => ({
  type: SET_PROJECT_STATUS,
  payload: {
    projectStatus: projectStatus,
  },
});

export const setProjectType = (projectType: string) => ({
  type: SET_PROJECT_TYPE,
  payload: {
    projectType: projectType,
  },
});
export const setProjectTypeAll = () => ({
  type: SET_PROJECT_TYPE_ALL,
});

export const setTokenType = (tokenType: string) => ({
  type: SET_TOKEN_TYPE,
  payload: {
    tokenType: tokenType,
  },
});

export const setTokenTypeAll = () => ({
  type: SET_TOKEN_TYPE_ALL,
});

export const setConditionsType = (conditionsType: string) => ({
  type: SET_CONDITIONS_TYPE,
  payload: {
    conditionsType: conditionsType,
  },
});

export const setVolumeStatus = (volumeStatus: string) => ({
  type: SET_VOLUME_STATUS,
  payload: {
    volumeStatus: volumeStatus,
  },
});

export const setClear = () => ({
  type: SET_CLEAR,
});
