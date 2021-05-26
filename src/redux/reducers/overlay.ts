import { Todo } from "../../interfaces/todo";

type OverlayActions =
    | { type: 'OPEN_OVERLAY', payload: { isOverlayOpen: boolean, todo?: Todo } }

export interface OverlayState {
    isOverlayOpen: boolean;
    todo?: Todo
};

export const overlayInitialState: OverlayState = {
    isOverlayOpen: false,
    todo: {
        uuid: '',
        title: '',
        description: '',
        creationDate: '',
        deadline: '',
        phrase: '',
        done: false,
    }
};

export const OverlayReducer = (state = overlayInitialState, action: OverlayActions): OverlayState => {
    switch (action.type) {
        case 'OPEN_OVERLAY':
            return {
                ...state,
                isOverlayOpen: action.payload.isOverlayOpen,
                todo: action.payload.todo,
            };

        default:
            return state;
    }
};