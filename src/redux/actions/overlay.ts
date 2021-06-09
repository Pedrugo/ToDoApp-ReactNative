import {Todo} from '../../interfaces/todo';

export const setOpenOverlay = (isOverlayOpen: boolean, todo?: Todo) => {
  return {
    type: 'OPEN_OVERLAY',
    payload: {isOverlayOpen, todo},
  };
};
