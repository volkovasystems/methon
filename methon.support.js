"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "methon",
              			"path": "methon/methon.js",
              			"file": "methon.js",
              			"module": "methon",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/methon.git",
              			"test": "methon-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Extract a list of inherited, enumerable and non-enumerable method names.
              	@end-module-documentation
              
              	@include:
              		{
              			"apiqe": "apiqe",
              			"een": "een",
              			"eqe": "eqe",
              			"fname": "fname",
              			"meton": "meton",
              			"posp": "posp",
              			"pyck": "pyck"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var apiqe = require("apiqe");
var een = require("een");
var eqe = require("eqe");
var fname = require("fname");
var meton = require("meton");
var posp = require("posp");
var pyck = require("pyck");

var checker = function checker(blueprint, constructor) {
	return eqe(blueprint, constructor) || fname(blueprint) === fname(constructor);
};

var methon = function methon(entity, limit) {
	/*;
                                             	@meta-configuration:
                                             		{
                                             			"entity:required": [
                                             				"function",
                                             				"object"
                                             			],
                                             			"limit": "[function,string]"
                                             		}
                                             	@end-meta-configuration
                                             */

	if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object") {
		entity = entity.constructor;
	}

	if (typeof entity != "function") {
		throw new Error("invalid entity");
	}

	limit = pyck(limit, [FUNCTION, STRING]);

	var prototype = entity.prototype;

	if (een(limit, prototype.constructor, checker)) {
		return [];
	}

	var method = meton(prototype);

	while (prototype = (0, _getPrototypeOf2.default)(prototype)) {
		if (een(limit, prototype.constructor, checker)) {
			continue;
		}

		method = apiqe(method, meton(prototype));
	}

	return posp(method, "constructor");
};

module.exports = methon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvbi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFwaXFlIiwicmVxdWlyZSIsImVlbiIsImVxZSIsImZuYW1lIiwibWV0b24iLCJwb3NwIiwicHljayIsImNoZWNrZXIiLCJibHVlcHJpbnQiLCJjb25zdHJ1Y3RvciIsIm1ldGhvbiIsImVudGl0eSIsImxpbWl0IiwiRXJyb3IiLCJGVU5DVElPTiIsIlNUUklORyIsInByb3RvdHlwZSIsIm1ldGhvZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsTUFBTUYsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNTyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLFNBQWxCLEVBQTZCQyxXQUE3QixFQUEwQztBQUN6RCxRQUFPUCxJQUFLTSxTQUFMLEVBQWdCQyxXQUFoQixLQUFpQ04sTUFBT0ssU0FBUCxNQUF1QkwsTUFBT00sV0FBUCxDQUEvRDtBQUNBLENBRkQ7O0FBSUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUM7Ozs7Ozs7Ozs7OztBQVlBLEtBQUksUUFBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QkEsV0FBU0EsT0FBT0YsV0FBaEI7QUFDQTs7QUFFRCxLQUFJLE9BQU9FLE1BQVAsSUFBaUIsVUFBckIsRUFBaUM7QUFDaEMsUUFBTSxJQUFJRSxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVERCxTQUFRTixLQUFNTSxLQUFOLEVBQWEsQ0FBRUUsUUFBRixFQUFZQyxNQUFaLENBQWIsQ0FBUjs7QUFFQSxLQUFJQyxZQUFZTCxPQUFPSyxTQUF2Qjs7QUFFQSxLQUFJZixJQUFLVyxLQUFMLEVBQVlJLFVBQVVQLFdBQXRCLEVBQW1DRixPQUFuQyxDQUFKLEVBQWtEO0FBQ2pELFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlVLFNBQVNiLE1BQU9ZLFNBQVAsQ0FBYjs7QUFFQSxRQUFPQSxZQUFZLDhCQUF1QkEsU0FBdkIsQ0FBbkIsRUFBdUQ7QUFDdEQsTUFBSWYsSUFBS1csS0FBTCxFQUFZSSxVQUFVUCxXQUF0QixFQUFtQ0YsT0FBbkMsQ0FBSixFQUFrRDtBQUNqRDtBQUNBOztBQUVEVSxXQUFTbEIsTUFBT2tCLE1BQVAsRUFBZWIsTUFBT1ksU0FBUCxDQUFmLENBQVQ7QUFDQTs7QUFFRCxRQUFPWCxLQUFNWSxNQUFOLEVBQWMsYUFBZCxDQUFQO0FBQ0EsQ0F4Q0Q7O0FBMENBQyxPQUFPQyxPQUFQLEdBQWlCVCxNQUFqQiIsImZpbGUiOiJtZXRob24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJtZXRob25cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibWV0aG9uL21ldGhvbi5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJtZXRob24uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJtZXRob25cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbWV0aG9uLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJtZXRob24tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRFeHRyYWN0IGEgbGlzdCBvZiBpbmhlcml0ZWQsIGVudW1lcmFibGUgYW5kIG5vbi1lbnVtZXJhYmxlIG1ldGhvZCBuYW1lcy5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFwaXFlXCI6IFwiYXBpcWVcIixcclxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcclxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcclxuXHRcdFx0XCJmbmFtZVwiOiBcImZuYW1lXCIsXHJcblx0XHRcdFwibWV0b25cIjogXCJtZXRvblwiLFxyXG5cdFx0XHRcInBvc3BcIjogXCJwb3NwXCIsXHJcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXBpcWUgPSByZXF1aXJlKCBcImFwaXFlXCIgKTtcclxuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xyXG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XHJcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCJmbmFtZVwiICk7XHJcbmNvbnN0IG1ldG9uID0gcmVxdWlyZSggXCJtZXRvblwiICk7XHJcbmNvbnN0IHBvc3AgPSByZXF1aXJlKCBcInBvc3BcIiApO1xyXG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcclxuXHJcbmNvbnN0IGNoZWNrZXIgPSBmdW5jdGlvbiBjaGVja2VyKCBibHVlcHJpbnQsIGNvbnN0cnVjdG9yICl7XHJcblx0cmV0dXJuIGVxZSggYmx1ZXByaW50LCBjb25zdHJ1Y3RvciApIHx8IGZuYW1lKCBibHVlcHJpbnQgKSA9PT0gZm5hbWUoIGNvbnN0cnVjdG9yICk7XHJcbn07XHJcblxyXG5jb25zdCBtZXRob24gPSBmdW5jdGlvbiBtZXRob24oIGVudGl0eSwgbGltaXQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRcImxpbWl0XCI6IFwiW2Z1bmN0aW9uLHN0cmluZ11cIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCB0eXBlb2YgZW50aXR5ID09IFwib2JqZWN0XCIgKXtcclxuXHRcdGVudGl0eSA9IGVudGl0eS5jb25zdHJ1Y3RvcjtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2YgZW50aXR5ICE9IFwiZnVuY3Rpb25cIiApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcclxuXHR9XHJcblxyXG5cdGxpbWl0ID0gcHljayggbGltaXQsIFsgRlVOQ1RJT04sIFNUUklORyBdICk7XHJcblxyXG5cdGxldCBwcm90b3R5cGUgPSBlbnRpdHkucHJvdG90eXBlO1xyXG5cclxuXHRpZiggZWVuKCBsaW1pdCwgcHJvdG90eXBlLmNvbnN0cnVjdG9yLCBjaGVja2VyICkgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG5cclxuXHRsZXQgbWV0aG9kID0gbWV0b24oIHByb3RvdHlwZSApO1xyXG5cclxuXHR3aGlsZSggcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBwcm90b3R5cGUgKSApe1xyXG5cdFx0aWYoIGVlbiggbGltaXQsIHByb3RvdHlwZS5jb25zdHJ1Y3RvciwgY2hlY2tlciApICl7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1ldGhvZCA9IGFwaXFlKCBtZXRob2QsIG1ldG9uKCBwcm90b3R5cGUgKSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHBvc3AoIG1ldGhvZCwgXCJjb25zdHJ1Y3RvclwiICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1ldGhvbjtcclxuIl19
//# sourceMappingURL=methon.support.js.map
