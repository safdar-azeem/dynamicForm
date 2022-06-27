const StringUtils = {
	splitIntoCamelCase: (str: string) => {
		const result = str.replace(/([A-Z])/g, ' $1').trim()
		return result.charAt(0).toUpperCase() + result.slice(1)
	},
}

export default StringUtils
