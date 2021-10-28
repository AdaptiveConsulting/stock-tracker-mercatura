export const checkResponseForError = (response) => {
	return new Promise((resolve, reject) => {
		if (response.ok) {
			response.json().then((json) => {
				return resolve(json)
			})
		} else {
			reject(
				`server responded with error code: ${response.status} ${response.statusText}`
			)
		}
	})
}
