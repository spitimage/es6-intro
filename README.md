# es6-intro
Collection of material for JS meetup

# Running the Examples
Since we're running the examples with a transpiler, you should be able to run them with any version of either node.js 
or io.js. (More on native compatibility later).

First install the babel transpiler as a global utility:

    npm install -g babel
    
To run the examples, just run `babel-node` on the example you'd like to try:

    babel-node modules.js
    babel-node declarations.js
    etc
    
### Key Concepts

* Backward compatibility
* Standardization of fragmented patterns
    
### Strict Mode
_Note_: ES6 [modules][modules] are always in strict mode, so that's why you don't see the `"use strict";` in these examples.

# Online Editors

* [ES6 Fiddle](http://www.es6fiddle.net/). 
* [Babel REPL](http://babeljs.io/repl/). Allows you to see what the transpiler generates.

# Great Resources

* [Exploring ES6](https://leanpub.com/exploring-es6)
* [Intro on the Babel site](http://babeljs.io/docs/learn-es2015/)
* [Compatibility Table](http://kangax.github.io/compat-table/es6/)
* [IO.js notes on ES6](https://iojs.org/en/es6.html)

[modules]: http://www.2ality.com/2014/09/es6-modules-final.html