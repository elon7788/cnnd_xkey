const genId1 = require('advh_xid');
const genId2 = require('rqnx_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|PWkfyWIz6y|' + genId2()).digest('base64');
}


module.exports = generateKey;
