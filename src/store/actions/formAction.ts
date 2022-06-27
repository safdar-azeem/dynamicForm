import {
	FormAction,
	FormActionTypes,
	IFormData,
} from '../../interfaces/store/formInterfaces'
let env = import.meta.env

const getDataStart = (): FormAction => ({
	type: FormActionTypes.GET_DATA_START,
})

const getDataSuccess = (data: IFormData): FormAction => ({
	type: FormActionTypes.GET_DATA_SUCCESS,
	payload: data,
})

const setFailure = (error: string): FormAction => ({
	type: FormActionTypes.SET_FAILURE,
	payload: error,
})

export const setFormDataAction = (data: IFormData[]): FormAction => ({
	type: FormActionTypes.SET_FORM_DATA,
	payload: data,
})

const submitDataStart = (): FormAction => ({
	type: FormActionTypes.SUBMIT_DATA_START,
})

const submitDataSuccess = (data: any): FormAction => ({
	type: FormActionTypes.SUBMIT_DATA_SUCCESS,
	payload: data,
})

export const getDataAction = (): any => {
	return async (dispatch: any) => {
		dispatch(getDataStart())
		try {
			const data = await fetch(env.VITE_APP_API_URL)
			const json = await data.json()
			if (!json.success) {
				return dispatch(setFailure(json.message))
			}
			dispatch(getDataSuccess(json.data))
		} catch (error) {
			dispatch(setFailure('Something went wrong while fetching data'))
		}
	}
}

export const submiDataAction = (data: IFormData): any => {
	return async (dispatch: any) => {
		dispatch(submitDataStart())

		try {
			const response = await fetch(env.VITE_APP_API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
			const json = await response.json()

			if (!json.success) {
				return dispatch(setFailure(json.message))
			}
			dispatch(submitDataSuccess(json.data))
		} catch (error: any) {
			dispatch(setFailure('Something went wrong while submitting data'))
		}
	}
}
