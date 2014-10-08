'use strict';

module.exports = shellescape;

var isWin = /^win/.test(process.platform);

function shellescape(arg) {
  if (Array.isArray(arg)) {
    return arg.map(shellescape).join(" ");
  } else {
	if (isWin) {
		if (/["'` \\$]/.test(arg)) {
		  return '"' + arg.replace(/(["`])/g, '\\$1') + '"';
		} else {
		  return arg;
		}
	} else {
		if (/["'` \\$]/.test(arg)) {
		  return '"' + arg.replace(/(["`\\$])/g, '\\$1') + '"';
		} else {
		  return arg;
		}
	}
  }
}
