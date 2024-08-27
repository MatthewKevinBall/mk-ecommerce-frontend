import { IFormState, defaultFormState } from "../interfaces/IFormState";

const initialState: IFormState = {
    ...defaultFormState,
};

type FormActions = 
  | { type: 'LOADING_START' }
  | { type: 'LOADING_STOP' }
  | { type: 'SUCCESS'; payload: string }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR'};


const formReducer = (state = initialState, action: FormActions): IFormState => {
    switch (action.type) {
        case 'LOADING_START':
            return { ...state, loading: true };
        case 'LOADING_STOP':
            return { ...state, loading: false };
        case 'SUCCESS':
            return { ...state, successMessage: action.payload, loading: false };
        case 'SET_ERROR':
            return { ...state, errorMessage: action.payload, loading: false };
        case 'CLEAR_ERROR':
            return { ...state, errorMessage: null };
        default:
            return state;
    }
};

export default formReducer;