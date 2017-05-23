
const assert = require( "assert" );
const methon = require( "./methon.js" );

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

assert.equal( method.some( ( method ) => method === "setA" ), true, "should be true" );

assert.equal( method.some( ( method ) => method === "setB" ), true, "should be true" );

console.log( "ok" );
