import { Grid } from '@mui/material'
import UserForm from './components/Forms/UserForm'
import UserResponse from './components/UserResponse'

const App = () => {
	return (
		<Grid container>
			<Grid item xs={12} sm={6}>
				<UserForm />
			</Grid>
			<Grid item xs={12} sm={6}>
				<UserResponse />
			</Grid>
		</Grid>
	)
}

export default App
