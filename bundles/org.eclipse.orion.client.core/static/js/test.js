/*******************************************************************************
 * Copyright (c) 2011 IBM Corporation and others. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
var orion = orion || {};
orion.Test = (function(assert) {
	var exports = {};
	var AssertionError = assert.AssertionError;

	var _namedlisteners = {};
	var _tests = [];
	exports.dispatchEvent = function(eventName) {
		var listeners = _namedlisteners[eventName];
		if (listeners) {
			for ( var i = 0; i < listeners.length; i++) {
				try {
					var args = Array.prototype.slice.call(arguments, 1);
					listeners[i].apply(null, args);
				} catch (e) {
					console.log(e); // for now, probably should dispatch an
									// ("error", e)
				}
			}
		}
	}

	exports.addEventListener = function(eventName, listener) {
		_namedlisteners[eventName] = _namedlisteners[eventName] || [];
		_namedlisteners[eventName].push(listener);
	};

	exports.removeEventListener = function(eventName, listener) {
		var listeners = _namedlisteners[eventName];
		if (listeners) {
			for ( var i = 0; i < listeners.length; i++) {
				if (listeners[i] === listener) {
					if (listeners.length === 1) {
						delete _namedlisteners[eventName];
					} else {
						_namedlisteners[eventName].splice(i, 1);
					}
					break;
				}
			}
		}
	};

	function _run(runName, obj) {
		exports.dispatchEvent("runStart", runName);
		var failures = 0;
		var deferredCount = 1;
		var result = new dojo.Deferred();

		for ( var property in obj) {
			if (property.match(/^test.+/)) {
				var test = obj[property];
				var testName = runName ? runName + "." + property : property;
				if (typeof test === "function") {
					exports.dispatchEvent("testStart", testName);
					try {
						var testResult = test();
						if (testResult && typeof testResult.then === "function") {
							deferredCount++;
							testResult.then(function(testName) {
								return function() {
									exports.dispatchEvent("testDone", testName, {
										result : true
									});
								};
							}(testName), function(testName) {
								return function(e) {
									failures++;
									e.log = false;
									exports.dispatchEvent("testDone", testName, {
										result : false,
										message : e.toString(),
										error : e
									});
								};
							}(testName)).then(function() {
								deferredCount--;
								if (deferredCount === 0) {
									result.resolve(failures);
								}
							});
						} else {
							exports.dispatchEvent("testDone", testName, {
								result : true
							});
						}
					} catch (e) {
						failures++;
						exports.dispatchEvent("testDone", testName, {
							result : false,
							message : e.toString(),
							error : e
						});
					}
				} else if (typeof test === "object") {
					deferredCount++;
					var runResult = _run(testName, test);
					if (runResult && typeof runResult.then === "function") {
						runResult.then(function(runFailures) {
							failures += runFailures;
							deferredCount--;
							if (deferredCount === 0) {
								result.resolve(failures);
							}
						});
					} else {
						deferredCount--;
						failures += runResult;
					}
				}
			}
		}
		deferredCount--;

		if (deferredCount == 0) {
			exports.dispatchEvent("runDone", runName, {
				failures : failures
			});
			return failures;
		} else {
			result.then(function() {
				exports.dispatchEvent("runDone", runName, {
					failures : failures
				});
			});
			return result.promise;
		}
	}

	exports.run = function(name, obj) {
		if (typeof obj === "undefined") {
			obj = name;
			name = "";
		}

		if (!obj || typeof obj !== "object") {
			if (_tests[0]) {
				obj = _tests[0];
			} else {
				throw new Error("not a test object");
			}
		}
		return _run(name, obj);
	};
	
	exports.add = function(obj) {
		_tests.push(obj);
	}
	
	exports.useConsole = function() {
		var times = {};
		var testCount = 0;
		var top;
		
		exports.addEventListener("runStart", function(name) {
			var name = name ? name : "<top>";
			if (!top) {
				top = name;
			};
			console.log("[Test Run] - " + name + " start");
			times[name] = new Date().getTime();
		});
		exports.addEventListener("runDone", function(name, obj) {
			var name = name ? name : "<top>";
			var result = [];
			result.push("[Test Run] - " + name + " done - ");
			result.push("[Failures:" + obj.failures + (name === top ? ", Test Count:" + testCount : "") +"] ");
			result.push("(" + (new Date().getTime() - times[name]) / 1000 + "s)");
			delete times[name];
			console.log(result.join(""));
		});
		exports.addEventListener("testStart", function(name) {
			times[name] = new Date().getTime();
			testCount++;
		});
		exports.addEventListener("testDone", function(name, obj) {
			var result = [];
			result.push(obj.result ? " [passed] " : " [failed] ");
			result.push(name);
			result.push(" (" + (new Date().getTime() - times[name]) / 1000 + "s)");
			delete times[name];
			if (!obj.result) {
				result.push("\n  " + obj.message);
			}
			console.log(result.join(""));
		});
	};
	return exports;
}(orion.Assert));