import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		secondary: {
			main: '#ecf0f2',
			contrastText: '#232729',
		},
		primary: {
			main: '#232729',
			contrastText: '#ecf0f2',
		},
		grey: {
			50: '#f3f5f7',
			100: '#f0f2f4',
			200: '#e8ebee',
			300: '#ced4da',
			400: '#adb5bd',
			500: '#56576d',
		},
		tonalOffset: 0.02,
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: '#F2F4F5',
					outline: 'none',
					borderRadius: '10px',
					padding: '0px',
					borderWidth: '5px',
					textUnderlineOffset: '0px',
					outlineColor: 'red',
					'& fieldset': {
						borderColor: '#F2F4F5',
						borderRadius: '10px',
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '9px',
				},
			},
		},
	},
})

interface IThemeProviderProps {
	children: React.ReactNode
}

const ThemeProviderComponent = ({ children }: IThemeProviderProps) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeProviderComponent
