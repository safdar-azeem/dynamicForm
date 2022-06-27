import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'
import ThemeProviderComponent from './theme/ThemeProvider'
import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProviderComponent>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProviderComponent>
	</React.StrictMode>
)
