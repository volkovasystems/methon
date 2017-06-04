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
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
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
			"protype": "protype",
			"pyck": "pyck"
		}
	@end-include
*/

const apiqe = require( "apiqe" );
const een = require( "een" );
const eqe = require( "eqe" );
const fname = require( "fname" );
const meton = require( "meton" );
const posp = require( "posp" );
const protype = require( "protype" );
const pyck = require( "pyck" );

const checker = function checker( blueprint, constructor ){
	return eqe( blueprint, constructor ) || fname( blueprint ) === fname( constructor );
};

const methon = function methon( entity, limit ){
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

	if( protype( entity, OBJECT ) ){
		entity = entity.constructor;
	}

	if( !protype( entity, FUNCTION ) ){
		throw new Error( "invalid entity" );
	}

	limit = pyck( limit, [ FUNCTION, STRING ] );

	let prototype = entity.prototype;

	if( een( limit, prototype.constructor, checker ) ){
		return [ ];
	}

	let method = meton( prototype );

	while( prototype = Object.getPrototypeOf( prototype ) ){
		if( een( limit, prototype.constructor, checker ) ){
			continue;
		}

		method = apiqe( method, meton( prototype ) );
	}

	return posp( method, "constructor" );
};

module.exports = methon;
