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
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("methon", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`methon with instance of class B`", function () {

		it("should return a list of inherited, enumerable and non-enumerable method names of class B", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					class A {
   						constructor( ){ }
   
   						setA( ){
   							return "a";
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   
   						setB( ){
   							return "b";
   						}
   					}
   
   					let b = new B( );
   
   					let method = methon( b );
   
   					return method.length > 0;
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});

		it("should contain 'setA'", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					class A {
   						constructor( ){ }
   
   						setA( ){
   							return "a";
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   
   						setB( ){
   							return "b";
   						}
   					}
   
   					let b = new B( );
   
   					let method = methon( b );
   
   					return method.some( ( method ) => method === "setA" );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});

		it("should contain 'setB'", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					class A {
   						constructor( ){ }
   
   						setA( ){
   							return "a";
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   
   						setB( ){
   							return "b";
   						}
   					}
   
   					let b = new B( );
   
   					let method = methon( b );
   
   					return method.some( ( method ) => method === "setB" );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});

	});


	describe("`methon with instance of class B and function and object limit parameter`", function () {

		it("should return list with length of 2", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					class A {
   						constructor( ){ }
   
   						setA( ){
   							return "a";
   						}
   					}
   
   					class B extends A {
   						constructor( ){ super( ); }
   
   						setB( ){
   							return "b";
   						}
   					}
   
   					let b = new B( );
   
   					return methon( b, [ Function, Object ] ).length;
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, 2);

		});

	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLG1DQUFWLEVBQStDLFlBQU87O0FBRXJESSxLQUFJLDBGQUFKLEVBQWdHLFlBQU87QUFDdEc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQ0Q7O0FBc0NBRixLQUFJLHVCQUFKLEVBQTZCLFlBQU87QUFDbkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQ0Q7O0FBc0NBRixLQUFJLHVCQUFKLEVBQTZCLFlBQU87QUFDbkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FwQ0Q7O0FBc0NBLEVBcEhEOzs7QUF1SEFOLFVBQVUsMkVBQVYsRUFBdUYsWUFBTzs7QUFFN0ZJLEtBQUkscUNBQUosRUFBMkMsWUFBTztBQUNqRDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsQ0FBdEI7O0FBRUEsR0FsQ0Q7O0FBb0NBLEVBdENEOztBQXdDQSxDQW5LRDs7QUFxS0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm1ldGhvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibWV0aG9uL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tZXRob24uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm1ldGhvblwiOiBcIm1ldGhvblwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcIm1ldGhvblwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgbWV0aG9uIHdpdGggaW5zdGFuY2Ugb2YgY2xhc3MgQmBcIiwgKCApID0+IHtcblxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYSBsaXN0IG9mIGluaGVyaXRlZCwgZW51bWVyYWJsZSBhbmQgbm9uLWVudW1lcmFibGUgbWV0aG9kIG5hbWVzIG9mIGNsYXNzIEJcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGNsYXNzIEEge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblxuXHRcdFx0XHRcdFx0c2V0QSggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiYVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIEIgZXh0ZW5kcyBBIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXG5cdFx0XHRcdFx0XHRzZXRCKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJiXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGIgPSBuZXcgQiggKTtcblxuXHRcdFx0XHRcdGxldCBtZXRob2QgPSBtZXRob24oIGIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBtZXRob2QubGVuZ3RoID4gMDtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXG5cdFx0aXQoIFwic2hvdWxkIGNvbnRhaW4gJ3NldEEnXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRjbGFzcyBBIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XG5cblx0XHRcdFx0XHRcdHNldEEoICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcImFcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjbGFzcyBCIGV4dGVuZHMgQSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgc3VwZXIoICk7IH1cblxuXHRcdFx0XHRcdFx0c2V0QiggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiYlwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxldCBiID0gbmV3IEIoICk7XG5cblx0XHRcdFx0XHRsZXQgbWV0aG9kID0gbWV0aG9uKCBiICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kLnNvbWUoICggbWV0aG9kICkgPT4gbWV0aG9kID09PSBcInNldEFcIiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cblx0XHRpdCggXCJzaG91bGQgY29udGFpbiAnc2V0QidcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGNsYXNzIEEge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IH1cblxuXHRcdFx0XHRcdFx0c2V0QSggKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiYVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIEIgZXh0ZW5kcyBBIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApeyBzdXBlciggKTsgfVxuXG5cdFx0XHRcdFx0XHRzZXRCKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJiXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGIgPSBuZXcgQiggKTtcblxuXHRcdFx0XHRcdGxldCBtZXRob2QgPSBtZXRob24oIGIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBtZXRob2Quc29tZSggKCBtZXRob2QgKSA9PiBtZXRob2QgPT09IFwic2V0QlwiICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgbWV0aG9uIHdpdGggaW5zdGFuY2Ugb2YgY2xhc3MgQiBhbmQgZnVuY3Rpb24gYW5kIG9iamVjdCBsaW1pdCBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGxpc3Qgd2l0aCBsZW5ndGggb2YgMlwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0Y2xhc3MgQSB7XG5cdFx0XHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxuXG5cdFx0XHRcdFx0XHRzZXRBKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJhXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2xhc3MgQiBleHRlbmRzIEEge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7IHN1cGVyKCApOyB9XG5cblx0XHRcdFx0XHRcdHNldEIoICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcImJcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgYiA9IG5ldyBCKCApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvbiggYiwgWyBGdW5jdGlvbiwgT2JqZWN0IF0gKS5sZW5ndGg7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDIgKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
