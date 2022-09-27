export const enum colors {
  LIGHT_GREEN = 'rgb(207 255 216)',
  LIGHT_YELLOW = 'rgb(255 241 198)',
  LIGHT_RED = 'rgb(255 213 204)',
  GREEN = '#10f33b',
  YELLOW = '#f4b900',
  RED = '#f86545',
}

export interface TableRows {
  id: number;
  name: string;
  status: string;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface Action<T> {
  type: string;
  payload: T;
}

export interface Filters {
  project: {
    status: string;
    type: string;
  };
  token: {
    type: string;
  };
  conditions: {
    type: string;
  };
  volume: { status: string };
}

export interface FiltersDispatch {
  projectStatus: 'project' | '-project';
  projectType: 'green' | 'yellow' | 'red';
  tokenType: string;
  conditionsType: '<1 year' | '<2,5 years' | '>5 years';
  volumeStatus: 'volume' | '-volume';
}

export interface PopupData {
  type: string;
  data: {
    name: string;
  }[];
}

export interface Popups {
  isTokenPopupOpen: boolean;
  isConditionPopupOpen: boolean;
  isProjectPopupOpen: boolean;
}

export interface CombineState {
  filters: Filters;
  popups: Popups;
}

export type PopupType = 'list' | 'input';

export type sortCell = 'project' | '-project' | 'volume' | '-volume';

export type onSortCell = 'project' | 'volume';

export type onFilterCell = 'project' | 'token' | 'conditions';
