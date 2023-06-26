const { WxCrypto } = require('node-wxcrypto')

module.exports = app => {
	/**
	 * wxcrypto
	 */
	const { token, aesKey, appId, options = {} } = app.config.wxcrypto
	app.wxcrypto = new WxCrypto(token, aesKey, appId, options)
}
