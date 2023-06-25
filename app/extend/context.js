module.exports = {
	/**
	 * de
	 */
	wxcrypto(rules, data) {
		data = data || this.request.body
		// const errors = this.app.validator.validate(rules, data)

		// if (errors) {
		// 	let msg = 'Validation Failed'
		// 	if (Array.isArray(errors)) {
		// 		msg +=
		// 			' => ' +
		// 			errors
		// 				.map(
		// 					({ code, field, message }) =>
		// 						`[${code}] field: ${field} | message: ${message}`
		// 				)
		// 				.join('; ')
		// 	}
		// 	this.throw(422, msg, {
		// 		code: 'invalid_param',
		// 		errors
		// 	})
		// }
	}
}
