export interface IFormData {
	fieldName: string
	type: string
	value: string
	options?: string[]
	testimonial?: string
}

export interface FormState {
	loading: boolean
	loadingOnSubmit: boolean
	submittedResponse: IFormData[]
	data: IFormData[]
	error: string | null
}

export interface FormAction {
	type: string
	payload?: any
}

export const initialState: FormState = {
	loading: false,
	loadingOnSubmit: false,
	data: [],
	submittedResponse: [],
	error: null,
}

export enum FormActionTypes {
	GET_DATA_START = 'GET_DATA_START',
	GET_DATA_SUCCESS = 'GET_DATA_SUCCESS',
	SET_FAILURE = 'SET_FAILURE',
	SET_FORM_DATA = 'SET_FORM_DATA',
	SUBMIT_DATA_START = 'SUBMIT_DATA_START',
	SUBMIT_DATA_SUCCESS = 'SUBMIT_DATA_SUCCESS',
}
