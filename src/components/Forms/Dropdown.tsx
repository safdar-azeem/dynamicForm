import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { IFormData } from '../../interfaces/store/formInterfaces'

interface DropdownProps {
	item: IFormData
	handleChange: (event: SelectChangeEvent) => void
}

const Dropdown = ({ item, handleChange }: DropdownProps) => {
	return (
		<FormControl
			fullWidth
			sx={{
				marginBottom: '1.4rem',
			}}>
			<InputLabel id='demo-simple-select-label'>
				{item.fieldName}
			</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={item.value}
				onChange={handleChange}
				name={item.fieldName}
				label={item.fieldName}>
				{item.options &&
					item.options.map((option: string) => {
						return <MenuItem value={option}>{option}</MenuItem>
					})}
			</Select>
		</FormControl>
	)
}

export default Dropdown
