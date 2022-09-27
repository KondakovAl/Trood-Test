import {
  OPEN_POPUP_PROJECT,
  OPEN_POPUP_TOKEN,
  OPEN_POPUP_CONDITIONS
} from '../actions/popups.actions';

export const openPopupProject = () => ({
  type: OPEN_POPUP_PROJECT,
});

export const openPopupToken = () => ({
  type: OPEN_POPUP_TOKEN,

});
export const openPopupConditions = () => ({
  type: OPEN_POPUP_CONDITIONS,
});

