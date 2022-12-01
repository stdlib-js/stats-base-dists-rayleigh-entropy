<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Entropy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Rayleigh][rayleigh-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_entropy" align="center" raw="h\left( X \right) = 1+\ln \left({\frac {\sigma }{\sqrt {2}}}\right)+{\frac {\gamma }{2}}" alt="Differential entropy for a Rayleigh distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = 1+\ln \left({\frac {\sigma }{\sqrt {2}}}\right)+{\frac {\gamma }{2}}" data-equation="eq:rayleigh_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/entropy/docs/img/equation_rayleigh_entropy.svg" alt="Differential entropy for a Rayleigh distribution.">
    <br>
</div>

<!-- </equation> -->

where `σ > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-entropy@esm/index.mjs';
```

#### entropy( sigma )

Returns the [differential entropy][entropy] of a [Rayleigh][rayleigh-distribution] distribution with scale `sigma` (in [nats][nats]).

```javascript
var y = entropy( 9.0 );
// returns ~3.139

y = entropy( 3.5 );
// returns ~2.195
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = entropy( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import entropy from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-rayleigh-entropy@esm/index.mjs';

var sigma;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    sigma = randu() * 20.0;
    y = entropy( sigma );
    console.log( 'sigma: %d, h(X,v): %d', sigma.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-rayleigh-entropy.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-rayleigh-entropy

[test-image]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-rayleigh-entropy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-rayleigh-entropy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-rayleigh-entropy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-rayleigh-entropy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-rayleigh-entropy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-rayleigh-entropy/main/LICENSE

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
