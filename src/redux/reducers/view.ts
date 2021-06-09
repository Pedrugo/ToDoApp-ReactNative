type ViewActions =
  | {type: 'ERROR'; payload: {hasError: boolean; errorMessege?: string}}
  | {type: 'SUCCESS'; payload: {hasSuccess: boolean; successMessege?: string}};

interface ViewState {
  isLoading: boolean;
  hasError: boolean;
  errorMessege: string;
  hasSuccess?: boolean;
  successMessege?: string;
}

const initialViewState: ViewState = {
  isLoading: false,
  hasError: false,
  errorMessege: '',
  hasSuccess: false,
  successMessege: '',
};

export const ViewStatReducer = (
  state = initialViewState,
  action: ViewActions,
) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: action.payload.hasError,
        errorMessege: action.payload.errorMessege,
        hasSuccess: false,
        successMessege: '',
      };

    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        errorMessege: '',
        hasSuccess: action.payload.hasSuccess,
        successMessege: action.payload.successMessege,
      };

    default:
      return state;
  }
};
