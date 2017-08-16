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

const assert = require( "should" );

//: @server:
const methon = require( "./methon.js" );
//: @end-server

//: @client:
const methon = require( "./methon.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "methon", ( ) => {

	describe( "`methon with instance of class B`", ( ) => {

		it( "should extract a list of inherited, enumerable and non-enumerable method names of class B", ( ) => {

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

			assert.equal( method.length > 0, true );

		} );

	} );

} );

//: @end-server


//: @client:

describe( "methon", ( ) => {
} );

//: @end-client


//: @bridge:

describe( "methon", ( ) => {
} );

//: @end-bridge
