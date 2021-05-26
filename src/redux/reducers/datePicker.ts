type DatePickerActions =
    | { type: 'IS_OPEN', payload: boolean }
    | { type: 'SELECTED_DATE', payload: string | '' }

interface DatePickerState {
    isOpen: boolean;
    selectedDate: string;
};

export const initialDatePickerState: DatePickerState = {
    isOpen: false,
    selectedDate: '',
};

export const DatePickerReducer = (state = initialDatePickerState, action: DatePickerActions): DatePickerState => {
    switch (action.type) {
        case 'IS_OPEN':
            return {
                ...state,
                isOpen: action.payload
            }

        case 'SELECTED_DATE':
            return {
                ...state,
                selectedDate: action.payload,
                isOpen: false
            }
        default:
            return state;
    };
};