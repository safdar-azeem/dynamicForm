import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Skeleton, TextField, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IFormData } from '../../interfaces/store/formInterfaces'
import {
	getDataAction,
	setFormDataAction,
	submiDataAction,
} from '../../store/actions/formAction'
import StringUtils from '../../utils/StringUtils'
import Dropdown from './Dropdown'
import UserFormSkelton from '../Skeletons/UserFormSkelton'

const UserForm = () => {
	const dispatch = useDispatch()

	const {
		data: formData,
		loading,
		loadingOnSubmit,
	} = useSelector((state: any) => state.form)

	const handleChange = (event: any) => {
		const { name, value } = event.target
		const newFormData = formData.map((item: IFormData) =>
			item.fieldName === name ? { ...item, value } : item
		)
		dispatch(setFormDataAction(newFormData))
	}

	const handleSubmit = (event: any) => {
		event.preventDefault()
		const submitData: any = {}
		formData.forEach((item: IFormData) => {
			submitData[item.fieldName] = item.value
		})
		dispatch(submiDataAction(submitData))
	}

	useEffect(() => {
		dispatch(getDataAction())
	}, [])

	return (
		<Box p={4}>
			<Typography
				variant='h5'
				sx={{
					fontWeight: 'bold',
				}}>
				Update User Data
			</Typography>
			<Box mt={6}>
				{loading ? (
					<>
						<UserFormSkelton length={6} />
					</>
				) : (
					<form onSubmit={handleSubmit}>
						{formData &&
							formData.map((item: IFormData) => {
								const label = StringUtils.splitIntoCamelCase(
									item.fieldName
								)
								if (item.type === 'select') {
									return (
										<Dropdown
											item={item}
											key={item.fieldName}
											handleChange={handleChange}
										/>
									)
								}
								return (
									<TextField
										key={item.fieldName}
										name={item.fieldName}
										fullWidth={true}
										placeholder={label}
										label={label}
										value={item.value}
										type={item.type}
										onChange={handleChange}
										multiline={item.type == 'multiline'}
										sx={{
											marginBottom: '1.4rem',
										}}
									/>
								)
							})}
						<LoadingButton
							variant='contained'
							color='primary'
							size='large'
							type='submit'
							loading={loadingOnSubmit}
							fullWidth={true}
							sx={{ padding: '11px 40px' }}>
							Submit
						</LoadingButton>
					</form>
				)}
			</Box>
		</Box>
	)
}

export default UserForm
