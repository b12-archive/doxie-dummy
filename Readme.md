[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/doxie-dummy-data.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/doxie-dummy-data)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/doxie-dummy-data/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/doxie-dummy-data)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/doxie-dummy-data.svg?style=flat-square)
](https://david-dm.org/studio-b12/doxie-dummy-data)
 [![Stability: unstable
](https://img.shields.io/badge/stability-unstable-yellowgreen.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)
](https://github.com/airbnb/javascript)




doxie-dummy-data
================

**A [tiny][] utility for testing *[doxie][]* plugins.**

[tiny]:   ./module/index.js
[doxie]:  http://npm.im/doxie




<p align="center"><a
  title="Graphic by the great Justin Mezzell"
  href="http://justinmezzell.tumblr.com/post/88665824413"
  >
  <br/>
  <br/>
  <img
    src="Readme/Matchbox.gif"
    width="400"
    height="300"
  />
  <br/>
  <br/>
</a></p>




Installation
------------

```sh
$ npm install doxie-dummy-data
```




Usage
-----

<h3><pre>
dummyData(docs)
  → doxieData
</pre></h3>

**Parameters:**

* **`docs`**  
  <sup>type: Array</sup>  
  An array of docs – for example, coming from *dox*.

**Return value:**  

* **`doxieData`**  
  <sup>type: Object</sup>  
  A doxie-compatible object. It can be piped into a plugin or returned by a plugin.




License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
