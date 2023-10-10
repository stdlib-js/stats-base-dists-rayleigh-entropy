/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var entropy = require( './../../dist' );


// FIXTURES //

var data = require( './../fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof entropy, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `sigma`, the function returns `NaN`', function test( t ) {
	var sigma = entropy( NaN );
	t.equal( isnan( sigma ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a scale `sigma` that is not a positive number, the function returns `NaN`', function test( t ) {
	var sigma;

	sigma = entropy( 0.0 );
	t.equal( isnan( sigma ), true, 'returns NaN' );

	sigma = entropy( -1.0 );
	t.equal( isnan( sigma ), true, 'returns NaN' );

	sigma = entropy( NINF );
	t.equal( isnan( sigma ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the differential entropy of a Rayleigh distribution', function test( t ) {
	var expected;
	var sigma;
	var delta;
	var tol;
	var i;
	var y;

	expected = data.expected;
	sigma = data.sigma;
	for ( i = 0; i < expected.length; i++ ) {
		y = entropy( sigma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'sigma:'+sigma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 40.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
