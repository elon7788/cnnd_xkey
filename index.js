const genId1 = require('7_xid');
const genId2 = require('8_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|Hjy9UVOFKe|' + genId2()).digest('base64');
}


module.exports = generateKey;
