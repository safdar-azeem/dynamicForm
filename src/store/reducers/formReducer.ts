import {
	FormState,
	FormAction,
	FormActionTypes,
	initialState,
} from '../../interfaces/store/formInterfaces'

const formReducer = (
	state: FormState = initialState,
	action: FormAction
): FormState => {
	switch (action.type) {
		case FormActionTypes.GET_DATA_START:
			return {
				...state,
				loading: true,
			}
		case FormActionTypes.GET_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.payload,
				error: null,
			}
		case FormActionTypes.SET_FAILURE:
			return {
				...state,
				loading: false,
				submittedResponse: [],
				error: action.payload,
			}
		case FormActionTypes.SET_FORM_DATA:
			return {
				...state,
				data: action.payload,
			}

		case FormActionTypes.SUBMIT_DATA_START:
			return {
				...state,
				loadingOnSubmit: true,
			}
		case FormActionTypes.SUBMIT_DATA_SUCCESS:
			return {
				...state,
				loadingOnSubmit: false,
				submittedResponse: action.payload,
				error: null,
			}

		default:
			return state
	}
}

export default formReducer
