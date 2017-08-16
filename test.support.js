"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "methon",
              			"path": "methon/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/methon.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"methon": "methon"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var methon = require("./methon.support.js");
//: @end-client







//: @client:

describe("methon", function () {

	describe("`methon with instance of class B`", function () {

		it("should return a list of inherited, enumerable and non-enumerable method names of class B", function () {var

			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "setA", value: function setA()

					{
						return "a";
					} }]);return A;}();var


			B = function (_A) {(0, _inherits3.default)(B, _A);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "setB", value: function setB()

					{
						return "b";
					} }]);return B;}(A);


			var b = new B();

			var method = methon(b);

			assert.equal(method.length > 0, true);

		});

		it("should contain 'setA'", function () {var

			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "setA", value: function setA()

					{
						return "a";
					} }]);return A;}();var


			B = function (_A2) {(0, _inherits3.default)(B, _A2);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "setB", value: function setB()

					{
						return "b";
					} }]);return B;}(A);


			var b = new B();

			var method = methon(b);

			assert.equal(method.some(function (method) {return method === "setA";}), true);

		});

		it("should contain 'setB'", function () {var

			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "setA", value: function setA()

					{
						return "a";
					} }]);return A;}();var


			B = function (_A3) {(0, _inherits3.default)(B, _A3);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "setB", value: function setB()

					{
						return "b";
					} }]);return B;}(A);


			var b = new B();

			var method = methon(b);

			assert.equal(method.some(function (method) {return method === "setB";}), true);

		});

	});


	describe("`methon with instance of class B and function and object limit parameter`", function () {

		it("should return list with length of 2", function () {var

			A = function () {
				function A() {(0, _classCallCheck3.default)(this, A);}(0, _createClass3.default)(A, [{ key: "setA", value: function setA()

					{
						return "a";
					} }]);return A;}();var


			B = function (_A4) {(0, _inherits3.default)(B, _A4);
				function B() {(0, _classCallCheck3.default)(this, B);return (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this));}(0, _createClass3.default)(B, [{ key: "setB", value: function setB()

					{
						return "b";
					} }]);return B;}(A);


			var b = new B();

			assert.equal(methon(b, [Function, Object]).length, 2);

		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibWV0aG9uIiwiZGVzY3JpYmUiLCJpdCIsIkEiLCJCIiwiYiIsIm1ldGhvZCIsImVxdWFsIiwibGVuZ3RoIiwic29tZSIsIkZ1bmN0aW9uIiwiT2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7Ozs7QUFRQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLG1DQUFWLEVBQStDLFlBQU87O0FBRXJEQyxLQUFJLDBGQUFKLEVBQWdHLFlBQU87O0FBRWhHQyxJQUZnRztBQUdyRyxpQkFBYyx3Q0FBRyxDQUhvRjs7QUFLOUY7QUFDTixhQUFPLEdBQVA7QUFDQSxNQVBvRzs7O0FBVWhHQyxJQVZnRztBQVdyRyxpQkFBYyw0SkFBYSxDQVgwRTs7QUFhOUY7QUFDTixhQUFPLEdBQVA7QUFDQSxNQWZvRyxnQkFVdEZELENBVnNGOzs7QUFrQnRHLE9BQUlFLElBQUksSUFBSUQsQ0FBSixFQUFSOztBQUVBLE9BQUlFLFNBQVNOLE9BQVFLLENBQVIsQ0FBYjs7QUFFQVAsVUFBT1MsS0FBUCxDQUFjRCxPQUFPRSxNQUFQLEdBQWdCLENBQTlCLEVBQWlDLElBQWpDOztBQUVBLEdBeEJEOztBQTBCQU4sS0FBSSx1QkFBSixFQUE2QixZQUFPOztBQUU3QkMsSUFGNkI7QUFHbEMsaUJBQWMsd0NBQUcsQ0FIaUI7O0FBSzNCO0FBQ04sYUFBTyxHQUFQO0FBQ0EsTUFQaUM7OztBQVU3QkMsSUFWNkI7QUFXbEMsaUJBQWMsNEpBQWEsQ0FYTzs7QUFhM0I7QUFDTixhQUFPLEdBQVA7QUFDQSxNQWZpQyxnQkFVbkJELENBVm1COzs7QUFrQm5DLE9BQUlFLElBQUksSUFBSUQsQ0FBSixFQUFSOztBQUVBLE9BQUlFLFNBQVNOLE9BQVFLLENBQVIsQ0FBYjs7QUFFQVAsVUFBT1MsS0FBUCxDQUFjRCxPQUFPRyxJQUFQLENBQWEsVUFBRUgsTUFBRixVQUFjQSxXQUFXLE1BQXpCLEVBQWIsQ0FBZCxFQUE4RCxJQUE5RDs7QUFFQSxHQXhCRDs7QUEwQkFKLEtBQUksdUJBQUosRUFBNkIsWUFBTzs7QUFFN0JDLElBRjZCO0FBR2xDLGlCQUFjLHdDQUFHLENBSGlCOztBQUszQjtBQUNOLGFBQU8sR0FBUDtBQUNBLE1BUGlDOzs7QUFVN0JDLElBVjZCO0FBV2xDLGlCQUFjLDRKQUFhLENBWE87O0FBYTNCO0FBQ04sYUFBTyxHQUFQO0FBQ0EsTUFmaUMsZ0JBVW5CRCxDQVZtQjs7O0FBa0JuQyxPQUFJRSxJQUFJLElBQUlELENBQUosRUFBUjs7QUFFQSxPQUFJRSxTQUFTTixPQUFRSyxDQUFSLENBQWI7O0FBRUFQLFVBQU9TLEtBQVAsQ0FBY0QsT0FBT0csSUFBUCxDQUFhLFVBQUVILE1BQUYsVUFBY0EsV0FBVyxNQUF6QixFQUFiLENBQWQsRUFBOEQsSUFBOUQ7O0FBRUEsR0F4QkQ7O0FBMEJBLEVBaEZEOzs7QUFtRkFMLFVBQVUsMkVBQVYsRUFBdUYsWUFBTzs7QUFFN0ZDLEtBQUkscUNBQUosRUFBMkMsWUFBTzs7QUFFM0NDLElBRjJDO0FBR2hELGlCQUFjLHdDQUFHLENBSCtCOztBQUt6QztBQUNOLGFBQU8sR0FBUDtBQUNBLE1BUCtDOzs7QUFVM0NDLElBVjJDO0FBV2hELGlCQUFjLDRKQUFhLENBWHFCOztBQWF6QztBQUNOLGFBQU8sR0FBUDtBQUNBLE1BZitDLGdCQVVqQ0QsQ0FWaUM7OztBQWtCakQsT0FBSUUsSUFBSSxJQUFJRCxDQUFKLEVBQVI7O0FBRUFOLFVBQU9TLEtBQVAsQ0FBY1AsT0FBUUssQ0FBUixFQUFXLENBQUVLLFFBQUYsRUFBWUMsTUFBWixDQUFYLEVBQWtDSCxNQUFoRCxFQUF3RCxDQUF4RDs7QUFFQSxHQXRCRDs7QUF3QkEsRUExQkQ7O0FBNEJBLENBakhEOztBQW1IQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm1ldGhvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibWV0aG9uL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tZXRob24uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm1ldGhvblwiOiBcIm1ldGhvblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgbWV0aG9uID0gcmVxdWlyZSggXCIuL21ldGhvbi5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwibWV0aG9uXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYG1ldGhvbiB3aXRoIGluc3RhbmNlIG9mIGNsYXNzIEJgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGEgbGlzdCBvZiBpbmhlcml0ZWQsIGVudW1lcmFibGUgYW5kIG5vbi1lbnVtZXJhYmxlIG1ldGhvZCBuYW1lcyBvZiBjbGFzcyBCXCIsICggKSA9PiB7XG5cblx0XHRcdGNsYXNzIEEge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXG5cdFx0XHRcdHNldEEoICl7XG5cdFx0XHRcdFx0cmV0dXJuIFwiYVwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNsYXNzIEIgZXh0ZW5kcyBBIHtcblx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cblx0XHRcdFx0c2V0QiggKXtcblx0XHRcdFx0XHRyZXR1cm4gXCJiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IGIgPSBuZXcgQiggKTtcblxuXHRcdFx0bGV0IG1ldGhvZCA9IG1ldGhvbiggYiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG1ldGhvZC5sZW5ndGggPiAwLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnc2V0QSdcIiwgKCApID0+IHtcblxuXHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cblx0XHRcdFx0c2V0QSggKXtcblx0XHRcdFx0XHRyZXR1cm4gXCJhXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblxuXHRcdFx0XHRzZXRCKCApe1xuXHRcdFx0XHRcdHJldHVybiBcImJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgYiA9IG5ldyBCKCApO1xuXG5cdFx0XHRsZXQgbWV0aG9kID0gbWV0aG9uKCBiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbWV0aG9kLnNvbWUoICggbWV0aG9kICkgPT4gbWV0aG9kID09PSBcInNldEFcIiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnc2V0QidcIiwgKCApID0+IHtcblxuXHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cblx0XHRcdFx0c2V0QSggKXtcblx0XHRcdFx0XHRyZXR1cm4gXCJhXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblxuXHRcdFx0XHRzZXRCKCApe1xuXHRcdFx0XHRcdHJldHVybiBcImJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgYiA9IG5ldyBCKCApO1xuXG5cdFx0XHRsZXQgbWV0aG9kID0gbWV0aG9uKCBiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbWV0aG9kLnNvbWUoICggbWV0aG9kICkgPT4gbWV0aG9kID09PSBcInNldEJcIiApLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYG1ldGhvbiB3aXRoIGluc3RhbmNlIG9mIGNsYXNzIEIgYW5kIGZ1bmN0aW9uIGFuZCBvYmplY3QgbGltaXQgcGFyYW1ldGVyYFwiLCAoICkgPT4ge1xuXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBsaXN0IHdpdGggbGVuZ3RoIG9mIDJcIiwgKCApID0+IHtcblxuXHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cblx0XHRcdFx0c2V0QSggKXtcblx0XHRcdFx0XHRyZXR1cm4gXCJhXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblxuXHRcdFx0XHRzZXRCKCApe1xuXHRcdFx0XHRcdHJldHVybiBcImJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgYiA9IG5ldyBCKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG1ldGhvbiggYiwgWyBGdW5jdGlvbiwgT2JqZWN0IF0gKS5sZW5ndGgsIDIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
