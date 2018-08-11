const _ = require('lodash');

module.exports = {
	isValid: input => {
		var valid = {};
		Object.keys(input).forEach(i => {
		    try {
		    	valid[i] = JSON.parse(input[i]) || parseInt(input[i]) || Date.parse(input[i]);
		    } catch (e) {
		    	return false;
		    }
		});
		return valid;
	}
};