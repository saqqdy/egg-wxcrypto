const { buildXMLSync, parseXMLSync } = require('node-wxcrypto')

module.exports = {
	/**
	 * decryptWxMsg
	 *
	 * @param {object} data wx encrypt data
	 * @param {object} options wxcrypto options
	 * @return {object} result
	 */
	async decryptWxMsg(data, options) {
		data = data || this.request.body

		const { encrypt, timestamp, nonce } = data
		return await this.app.wxcrypto.decrypt(encrypt, timestamp, nonce, options)
	},

	/**
	 * decryptWxMsg
	 *
	 * @param {object} data wx encrypt data
	 * @param {object} options wxcrypto options
	 * @return {object} result
	 */
	async encryptWxMsg(data, options) {
		data = data || this.request.body

		return await this.app.wxcrypto.encrypt(data, options)
	},

	buildXML: buildXMLSync,
	parseXML: parseXMLSync
}
