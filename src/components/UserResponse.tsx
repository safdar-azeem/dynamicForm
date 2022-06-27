import { Alert, Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const UserResponse = () => {
	const { submittedResponse, error } = useSelector((state: any) => state.form)

	return (
		<Box
			sx={{
				minHeight: '100vh',
				backgroundColor: 'grey.100',
			}}
			p={4}>
			<Typography
				variant='h5'
				sx={{
					fontWeight: 'bold',
				}}>
				Response will be here
			</Typography>
			<Box mt={5}>
				{error ? (
					<Alert severity='error'>{error}</Alert>
				) : (
					<pre
						style={{
							whiteSpace: 'pre-wrap',
						}}>
						{JSON.stringify(submittedResponse, null, 3)}
					</pre>
				)}
			</Box>
		</Box>
	)
}

export default UserResponse
