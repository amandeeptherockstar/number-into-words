# Number Into Words


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![Build Status](https://img.shields.io/coveralls/blakeembrey/change-case.svg?style=flat)](https://travis-ci.org/joemccann/dillinger)


number-into-words is a light-weight, quick number to words generator for NodeJS or other Front End Frameworks that uses JavaScript. It has ZERO dependency.

  - Generate Words from Numbers (Capital/lowercase/UPPERCASE Supported)
  - Two Major Numbering System Supported (Indian & International Number System)
  - Auto Punctuation inbuilt.
  - ZERO Dependencies.
  - Light Weight (9 kB as measured correctly).
  - Test Before Installing (Link is provided in Reference Section).

### Installation

number-into-words requires [Node.js](https://nodejs.org/) v6+ or A browser Support upto ES6 alteast to run. Backward compatibility will be added in Upcoming Versions.

Create a directory and install the package.

```sh
$ mkdir number-into-words-folder
$ cd number-into-words-folder
$ npm install number-into-words
```

### Reference:
| Repo | README |
| ------ | ------ |
| Github | https://github.com/amandeeptherockstar/number-into-words |
| NPM Package | https://www.npmjs.com/package/number-into-words |
| Test Online | https://numberintowords.netlify.com/ |


### Load Module in Project

Load the Module:
```sh
const converter = require('number-into-words');
```
#### Methods
Module gives us two methods to use:
```sh
#1. indianConversion(number, {characterCase: value});
```
** number: int = Number which needs to be converted into Words Using Indian Numbering System.
** value: string = value can be the return case of words, Possible values are: capital, uppercase and lowercase.
For more info On Indian Numbering System visit https://en.wikipedia.org/wiki/Indian_numbering_system

```sh
#2. internationalConversion(number, {characterCase: value});
```
** number: int = Number which needs to be converted into Words Using International Numbering System.
** value: string = value can be the return case of words, Possible values are: capital, uppercase and lowercase.
For more info On International Numbering System visit https://www.math-only-math.com/international-numbering-system.html

### Examples
```javascript
/* indianConversion */
const words = converter.indianConversion(7664190, {characterCase: 'UPPERCASE'});
console.log(words);
// output - SEVENTY-SIX LAC, SIXTY-FOUR THOUSAND, ONE HUNDRED AND NINETY.

/* internationalConversion */
const words = converter.internationalConversion(100000001, {characterCase: 'lowercase'});
console.log(words);
// output - one hundred million and three.
```
# Testing Online Before Installing
Visit the following URL to see the practical use of this package: 
https://numberintowords.netlify.com/

License
----
MIT

**Free Package, Hell Yeah!**

