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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGhvbi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFwaXFlIiwicmVxdWlyZSIsImVlbiIsImVxZSIsImZuYW1lIiwibWV0b24iLCJwb3NwIiwicHljayIsImNoZWNrZXIiLCJibHVlcHJpbnQiLCJjb25zdHJ1Y3RvciIsIm1ldGhvbiIsImVudGl0eSIsImxpbWl0IiwiRXJyb3IiLCJGVU5DVElPTiIsIlNUUklORyIsInByb3RvdHlwZSIsIm1ldGhvZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsTUFBTUYsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssT0FBT0wsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNTyxVQUFVLFNBQVNBLE9BQVQsQ0FBa0JDLFNBQWxCLEVBQTZCQyxXQUE3QixFQUEwQztBQUN6RCxRQUFPUCxJQUFLTSxTQUFMLEVBQWdCQyxXQUFoQixLQUFpQ04sTUFBT0ssU0FBUCxNQUF1QkwsTUFBT00sV0FBUCxDQUEvRDtBQUNBLENBRkQ7O0FBSUEsSUFBTUMsU0FBUyxTQUFTQSxNQUFULENBQWlCQyxNQUFqQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDOUM7Ozs7Ozs7Ozs7OztBQVlBLEtBQUksUUFBT0QsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUFyQixFQUErQjtBQUM5QkEsV0FBU0EsT0FBT0YsV0FBaEI7QUFDQTs7QUFFRCxLQUFJLE9BQU9FLE1BQVAsSUFBaUIsVUFBckIsRUFBaUM7QUFDaEMsUUFBTSxJQUFJRSxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVERCxTQUFRTixLQUFNTSxLQUFOLEVBQWEsQ0FBRUUsUUFBRixFQUFZQyxNQUFaLENBQWIsQ0FBUjs7QUFFQSxLQUFJQyxZQUFZTCxPQUFPSyxTQUF2Qjs7QUFFQSxLQUFJZixJQUFLVyxLQUFMLEVBQVlJLFVBQVVQLFdBQXRCLEVBQW1DRixPQUFuQyxDQUFKLEVBQWtEO0FBQ2pELFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlVLFNBQVNiLE1BQU9ZLFNBQVAsQ0FBYjs7QUFFQSxRQUFPQSxZQUFZLDhCQUF1QkEsU0FBdkIsQ0FBbkIsRUFBdUQ7QUFDdEQsTUFBSWYsSUFBS1csS0FBTCxFQUFZSSxVQUFVUCxXQUF0QixFQUFtQ0YsT0FBbkMsQ0FBSixFQUFrRDtBQUNqRDtBQUNBOztBQUVEVSxXQUFTbEIsTUFBT2tCLE1BQVAsRUFBZWIsTUFBT1ksU0FBUCxDQUFmLENBQVQ7QUFDQTs7QUFFRCxRQUFPWCxLQUFNWSxNQUFOLEVBQWMsYUFBZCxDQUFQO0FBQ0EsQ0F4Q0Q7O0FBMENBQyxPQUFPQyxPQUFQLEdBQWlCVCxNQUFqQiIsImZpbGUiOiJtZXRob24uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibWV0aG9uXCIsXG5cdFx0XHRcInBhdGhcIjogXCJtZXRob24vbWV0aG9uLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtZXRob24uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibWV0aG9uXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tZXRob24uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJtZXRob24tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFeHRyYWN0IGEgbGlzdCBvZiBpbmhlcml0ZWQsIGVudW1lcmFibGUgYW5kIG5vbi1lbnVtZXJhYmxlIG1ldGhvZCBuYW1lcy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXBpcWVcIjogXCJhcGlxZVwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcblx0XHRcdFwibWV0b25cIjogXCJtZXRvblwiLFxuXHRcdFx0XCJwb3NwXCI6IFwicG9zcFwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFwaXFlID0gcmVxdWlyZSggXCJhcGlxZVwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCBmbmFtZSA9IHJlcXVpcmUoIFwiZm5hbWVcIiApO1xuY29uc3QgbWV0b24gPSByZXF1aXJlKCBcIm1ldG9uXCIgKTtcbmNvbnN0IHBvc3AgPSByZXF1aXJlKCBcInBvc3BcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5cbmNvbnN0IGNoZWNrZXIgPSBmdW5jdGlvbiBjaGVja2VyKCBibHVlcHJpbnQsIGNvbnN0cnVjdG9yICl7XG5cdHJldHVybiBlcWUoIGJsdWVwcmludCwgY29uc3RydWN0b3IgKSB8fCBmbmFtZSggYmx1ZXByaW50ICkgPT09IGZuYW1lKCBjb25zdHJ1Y3RvciApO1xufTtcblxuY29uc3QgbWV0aG9uID0gZnVuY3Rpb24gbWV0aG9uKCBlbnRpdHksIGxpbWl0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImxpbWl0XCI6IFwiW2Z1bmN0aW9uLHN0cmluZ11cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIHR5cGVvZiBlbnRpdHkgPT0gXCJvYmplY3RcIiApe1xuXHRcdGVudGl0eSA9IGVudGl0eS5jb25zdHJ1Y3Rvcjtcblx0fVxuXG5cdGlmKCB0eXBlb2YgZW50aXR5ICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRsaW1pdCA9IHB5Y2soIGxpbWl0LCBbIEZVTkNUSU9OLCBTVFJJTkcgXSApO1xuXG5cdGxldCBwcm90b3R5cGUgPSBlbnRpdHkucHJvdG90eXBlO1xuXG5cdGlmKCBlZW4oIGxpbWl0LCBwcm90b3R5cGUuY29uc3RydWN0b3IsIGNoZWNrZXIgKSApe1xuXHRcdHJldHVybiBbIF07XG5cdH1cblxuXHRsZXQgbWV0aG9kID0gbWV0b24oIHByb3RvdHlwZSApO1xuXG5cdHdoaWxlKCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIHByb3RvdHlwZSApICl7XG5cdFx0aWYoIGVlbiggbGltaXQsIHByb3RvdHlwZS5jb25zdHJ1Y3RvciwgY2hlY2tlciApICl7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRtZXRob2QgPSBhcGlxZSggbWV0aG9kLCBtZXRvbiggcHJvdG90eXBlICkgKTtcblx0fVxuXG5cdHJldHVybiBwb3NwKCBtZXRob2QsIFwiY29uc3RydWN0b3JcIiApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZXRob247XG4iXX0=
//# sourceMappingURL=methon.support.js.map
